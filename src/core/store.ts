import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import score from '../modules/score/scoreSlice';
import signalr from '../core/signalr/signalrSlice';

const reducer = combineReducers({ signalr, score });

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
