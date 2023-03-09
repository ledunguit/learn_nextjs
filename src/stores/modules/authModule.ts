import { AuthInfo, UserInfo } from '@/types/auth';
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

const initialState: AuthInfo = {
  user: {
    name: '',
    age: 0
  },
  isVerified: false
};

const authModule = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthInfo, action: PayloadAction<UserInfo>) => {
      return { ...state, user: action.payload };
    },
    setVerified: (state: AuthInfo, action: PayloadAction<boolean>) => {
      return { ...state, isVerified: action.payload };
    }
  }
});
export const authModuleState = (state: RootState) => state.auth;
export const getUser = createSelector([authModuleState], (state: AuthInfo) => state.user);
export const getIsVerified = createSelector([authModuleState], (state: AuthInfo) => state.isVerified);

export const { setUser, setVerified } = authModule.actions;
export default authModule;