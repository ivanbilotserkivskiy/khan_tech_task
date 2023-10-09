import { useState } from 'react';
import { createContainer } from 'react-tracked';
import { SharedStateType } from '../types/SharedStateType'
const initialState: SharedStateType = {
  randomPost: null,
  largePost: null,
  text: 'hello',
  posts: [],
  page: 1,
  perPage: 6,
  total: 0,
};


const useMyState = () => useState(initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(useMyState);