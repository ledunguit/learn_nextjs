import { combineReducers } from '@reduxjs/toolkit';

import authModule from './modules/authModule';

const rootReducer = combineReducers({
  [authModule.name]: authModule.reducer
});

export default rootReducer;