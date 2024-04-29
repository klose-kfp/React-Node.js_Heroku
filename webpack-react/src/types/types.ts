export type UserState = {
  email: string;
  pass: string;
  showPassword: boolean;
  error: boolean;
};

export type SignupState = {
  email: string;
  username: string;
  pass: string;
  repass: string;
  showPassword: boolean;
  errorMessage: string;
  error: boolean;
};

export type UserUpdateState = {
  email: string;
  username: string;
  showPassword: boolean;
  errorMessage: string;
  error: boolean;
};
export type UserDeleteState = {
  pass: string;
  showPassword: boolean;
  error: string;
};

export type PropsState = {
  ProName: string;
  NowDate: string;
};

export type PropsState2 = {
  ProName: string;
  NowDate: string;
  ProUrl: string[];
};

export type PropsState3 = {
  ProUrl: string[];
};

export type PropsState4 = {
  ProUrl: string;
  NowDate: string;
};

export type PropsState5 = {
  ProName: string;
  NowDate: string;
  ProEmail: string;
};

export type ChatPropsState = {
  ProAuthor: string;
  ProChat: string;
};

export type TextType = {
  author: string;
  text: string;
};

export type BoxType = {
  loginuser: string;
  author: string;
};
