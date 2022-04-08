import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import score from '../modules/score/scoreSlice';

const reducer = combineReducers({ score });

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
