import {createSlice} from '@reduxjs/toolkit';

export const getUsersSlice = createSlice({
  name: 'user',
  initialState: {
    usersLoading: false,
    users: [],
  },
  reducers: {
    getUsers(state) {
      state.usersLoading = true;
    },
    setUsers: (state, action) => {
      const {users} = action.payload;
      state.users = users;
      state.usersLoading = false;
    },
  },
});

export const {getUsers, setUsers} = getUsersSlice.actions;
