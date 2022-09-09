import { NextFunction, Request, Response } from "express";
import { deleteUser, findAllUsers } from "../services/user.service";

export const getMeHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await findAllUsers();
    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllDoctorsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users= await findAllUsers();
    res.status(200).json({
      status: "success",
      result: users.filter(user => user.role=='doctor' ).length,
      data: {
        doctors:users.filter(user => user.role=='doctor' )
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user= await deleteUser(req.body.id);
    res.status(200).json({
      status: "success",
      data: {
        user: user
      },
    });
  } catch (err: any) {
    next(err);
  }
};
