import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: useReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
