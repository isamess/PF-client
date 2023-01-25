import { configureStore } from "@reduxjs/toolkit";
// import  {api} from '../slices/api'
import FilterSlices from '../slices/FilterSlices'
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import {authSlice} from '../slices/AuthSlice'
import logger from 'redux-logger'


import AuthReducer, { loadUser } from "../slices/AuthSlice";
import cartReducer, { getTotal } from "../slices/CartSlice";
import productsReducer, {
  categoryFetch,
  productsFetch,
} from "../slices/ProductsSlice";
import ordersReducer, { ordersFetch } from "../slices/OrdersSlice";
import UsersSlice, { usersFetch } from "../slices/UsersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: AuthReducer,
    products: productsReducer,
    orders: ordersReducer,
    users: UsersSlice,
    filterState: FilterSlices,
    
    
  },
  middleware: getDefaultMiddleware=>getDefaultMiddleware().concat(logger),
  devTools:false
});
setupListeners(store.dispatch)

store.dispatch(getTotal());
store.dispatch(loadUser(null));
store.dispatch(productsFetch());
store.dispatch(categoryFetch());
store.dispatch(usersFetch());
store.dispatch(ordersFetch());

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
