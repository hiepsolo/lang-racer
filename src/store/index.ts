import { AuthSlice, createAuthSlice } from './authSlice'

import { create } from 'zustand'

export const useBoundStore = create<AuthSlice>((...a) => ({
  ...createAuthSlice(...a),
}))