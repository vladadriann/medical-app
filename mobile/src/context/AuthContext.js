import React from 'react';
import {useState} from 'react';

export const AuthState = React.createContext();

const AuthStateProvider = props => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <AuthState.Provider
      value={{
        authToken: authToken,
        setAuthToken: setAuthToken,
      }}>
      {props.children}
    </AuthState.Provider>
  );
};

export default AuthStateProvider;
