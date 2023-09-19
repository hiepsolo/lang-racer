import { AuthSlice, createAuthSlice } from './authSlice'

import { createStore } from 'zustand/vanilla'

const appStore = createStore<AuthSlice>((...a) => ({
  ...createAuthSlice(...a),
}))

const {getState, setState, subscribe} = appStore

export {
  getState,
  setState,
  subscribe,
  appStore
}