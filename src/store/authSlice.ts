import { StateCreator } from 'zustand'

export interface AuthSlice {
  isAuth: boolean,
  fullname: string,
  setUser: (name: string) => void,
  logout: () => void
}

const initValues = {
  isAuth: false,
  fullname: ''
}

export const createAuthSlice: StateCreator<
AuthSlice,
[],
[],
AuthSlice
> = (set) => ({
  ...initValues,
  setUser: (name: string) => set(state => ({
    isAuth: true,
    fullname: name,
  })),
  logout: () => set(state => ({
    ...initValues
  }))
})
