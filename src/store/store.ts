// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // Usa o localStorage
import authReducer from './slices/auth_slice'
import { combineReducers } from 'redux'

// Configuração do persist
const persistConfig = {
  key: 'multischool',
  storage,
}

const rootReducer = combineReducers({
  auth: authReducer,
  // Outros reducers, se houver
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necessário para evitar erros relacionados ao redux-persist
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
