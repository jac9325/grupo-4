import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsers, createUser, login } from '../../api/users';

const initialState = {};

export const getAllUsersAsync = createAsyncThunk('users/getAll', async () => {
  const response = await getAllUsers();
  return response.data;
});

export const createUserAsync = createAsyncThunk(
  'users/create',
  async (user) => {
    const response = await createUser(user);
    return response;
  }
);

export const loginAsync = createAsyncThunk('login', async (user) => {
  const response = await login(user);
  return response;
});

export const usersSlice = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {
    setToken: (state, { payload: token }) => {
      state.token = token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(createUserAsync.fulfilled, (state, { payload }) => {
        state.created = payload;
      })
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        const { token } = payload;
        state.loggued = true;
        state.token = token;
      });
  },
});

export const { setToken } = usersSlice.actions;

export const selectUsers = (state) => state.usuarios.users;
export const selectUserLoggued = (state) => state.usuarios.loggued;

export default usersSlice.reducer;
