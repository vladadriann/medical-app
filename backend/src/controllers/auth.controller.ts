import config from "config";
import { CookieOptions, NextFunction, Request, Response } from "express";
import { resolve } from "node:path/posix";
import { CreateUserInput, LoginUserInput } from "../schemas/user.schema";
import { createUser, findUser, signToken } from "../services/user.service";
import AppError from "../utils/app-error";

// Exclude this fields from the response
export const excludedFields = ["password"];

// Cookie options
const accessTokenCookieOptions: CookieOptions = {
  expires: new Date(
    Date.now() + config.get<number>("accessTokenExpiresIn") * 60 * 1000
  ),
  maxAge: config.get<number>("accessTokenExpiresIn") * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

// Only set secure to true in production
if (process.env.NODE_ENV === "production")
  accessTokenCookieOptions.secure = true;

export const registerHandler = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {

    let role = null
    if (req.body.role !== undefined) {
      role = req.body.role
    }

    const user = await createUser({
      email: req.body.email,
      fullName: req.body.fullName,
      password: req.body.password,
      role: ((role!==null) && (role==='user')) ?  'user' : 'doctor'
    });

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Email already exist",
      });
    }
    next(err);
  }
};

export const loginHandler = async (
  req: Request<{}, {}, LoginUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get the user from the collection
    const user = await findUser({ email: req.body.email });

    // Check if user exist and password is correct
    if (
      !user ||
      !(await user.comparePasswords(user.password, req.body.password))
    ) {
      return next(new AppError("Invalid email or password", 401));
    }

    // Create an Access Token
    const { accessToken } = await signToken(user);

    // Send Access Token in Cookie
    res.cookie("accessToken", accessToken, accessTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    // Send Access Token
    res.status(200).json({
      status: "success",
      token: accessToken,
      role :user.role,
    });
  } catch (err: any) {
    next(err);
  }
};
