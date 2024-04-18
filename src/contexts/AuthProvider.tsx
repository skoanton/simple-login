import { createContext, useReducer } from "react";

export const ACTION = {
  SETCLICKEDLOGIN: "SETCLICKEDLOGIN",
  SETOPENMODAL: "SETOPENMODAL",
  SETLOGGEDIN: "SETLOGGEDIN",
};

type Action = {
  type: string;
  payload: boolean;
};

type State = {
  clickedLogin: boolean;
  modalIsOpen: boolean;
  isLoggedIn: boolean;
};

const initalState: State = {
  clickedLogin: false,
  modalIsOpen: false,
  isLoggedIn: false,
};

const loginReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION.SETCLICKEDLOGIN:
      return { ...state, clickedLogin: action.payload };
    case ACTION.SETOPENMODAL:
      return { ...state, modalIsOpen: action.payload };
    case ACTION.SETLOGGEDIN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export const AuthContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initalState,
  dispatch: () => null,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(loginReducer, initalState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
