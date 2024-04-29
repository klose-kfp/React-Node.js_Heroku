import { Slice, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//ログイン処理用
type LoginUserInput = {
  userEmail: string;
  userPass: string;
};

type LoginUserOutput = {
  email: string;
  password: string;
  access: string;
};

export const loginUser = createAsyncThunk(
  "user/LoginUser",
  async (userCredentials: LoginUserInput): Promise<LoginUserOutput> => {
    let setData: LoginUserOutput = {
      email: "",
      password: "",
      access: "",
    };

    const request = await axios.post(
      process.env.REACT_APP_AXIOS_ADDRESS + "api/auth/jwt/create/",
      {
        email: userCredentials.userEmail,
        password: userCredentials.userPass,
      }
    );
    console.log(request);
    console.log(request.data.access);
    if (request.data.access) {
      setData = {
        email: userCredentials.userEmail,
        password: userCredentials.userPass,
        access: request.data.access,
      };
      localStorage.setItem("user", JSON.stringify(setData));
    }
    console.log(setData);
    return setData;
  }
);

export const userLogout = createAsyncThunk("user/Logout", async () => {
  await localStorage.removeItem("user");
});

type State = {
  readonly loading: boolean;
  readonly user: any;
  readonly errorMessage: string | null | undefined;
};
const initialState: State = {
  loading: false,
  user: null,
  errorMessage: null,
};

const userSlice: Slice<State, {}, "user"> = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.errorMessage = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.errorMessage = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.error.message === "Request failed with status code 401") {
          state.errorMessage = "Access Denied! Invalid Credentials";
        } else {
          state.errorMessage = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
