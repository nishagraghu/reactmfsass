export interface AuthAction {
    type: string;
    payload?: any;
  }
  export interface AuthState {
    isAuthenticated: boolean;
    user: any; // Replace 'any' with the appropriate user object type
  }
  type DispatchType = (args: AuthAction) => AuthAction
