import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: false,
  user: {
    name: 'Husein',
    isAuthenticated: true,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.isFetching = !state.isFetching;
    },
  },
});

export const { setIsFetching } = userSlice.actions;

export default userSlice.reducer;
