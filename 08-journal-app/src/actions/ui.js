import { types } from '../types/types';

export const setUIError = (error) => ({
  type: types.uiSetError,
  payload: error
});

export const removeUIError = () => ({
  type: types.uiRemoveError
});

export const uiStartLoading = () => ({
  type: types.uiStartLoading
});

export const uiFinishLoading = () => ({
  type: types.uiFinishLoading
});
