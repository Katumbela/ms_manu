import type { AppDispatch } from '@/store/store'
import { useDispatch } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
