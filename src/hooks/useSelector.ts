import type { RootState } from '@/store/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
