import { combineReducers, AnyAction, Reducer } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import systemReducer from '../features/system/systemSlice';
import animeReducer from '../features/anime/animeSlice';

const appReducer = combineReducers({
  system: systemReducer,
  anime: animeReducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'system/clearResults') {
    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
