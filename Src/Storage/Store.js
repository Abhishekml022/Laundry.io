import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistStore, persistReducer} from 'redux-persist';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { laundryreducer } from './Reducer';

//redux persist config

const persistConfig = {
  key: 'Laundry-io',
  storage: AsyncStorage,
};

//middleware
const persistedReducer = persistReducer(persistConfig,laundryreducer )

//redux: store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => 
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
  }),
});

let persister = persistStore(store);

export {store, persister}