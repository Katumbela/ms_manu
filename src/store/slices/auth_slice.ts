import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { Student } from '@/infra/interfacess'
import { routes } from '@/infra' 
export interface AuthState {
  access_token: string | null
  isAuthenticated: boolean
  student: Student | null
}

const initialState: AuthState = {
  access_token: null,
  isAuthenticated: false,
  student: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ access_token: string; student: any }>) => {
      //setLocalStorage('token', action.payload.acess_token)
      return {
        ...state,
        access_token: action.payload.access_token,
        isAuthenticated: true,
        student: { ...action.payload.student, comments: [...(action.payload.student.comments || [])] },
      };
    },
    logout: (state) => {
      setTimeout(() => {
        window.location.href = routes.HOME_ROUTE
      }, 2500);
      return {
        ...state,
        access_token: null,
        isAuthenticated: false,
        student: null,
      };
    },
  },
});


export const { loginSuccess, logout } = authSlice.actions
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated
export const selectUser = (state: RootState) => state.auth.student
export default authSlice.reducer
