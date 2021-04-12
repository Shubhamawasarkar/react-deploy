import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userSignupReducer, userSigninReducer, fetchProductsReducer , fetchCategoriesReducer, fetchProductReducer,fetchCategoryReducer,fetchSubCategoryReducer,fetchProductListReducer,addToCartReducer,fetchCartListReducer,removeFromCartReducer,orderReducer,getOrderReducer} from './reducers/userReducers'
import {deleteProductReducer,updateProductReducer,addCategoryReducer,deleteCategoryReducer,updateCategoryReducer,getAllSubCategoriesReducer,deleteSubCategoryReducer,updateSubCategoryReducer,getSubCategoryReducer,getCustomersReducer,deleteCustomerReducer,getAdminsReducer,deleteAdminReducer,addAdminReducer,getOrdersReducer,approveOrderReducer,getOrderDetailsReducer,getDispatchedOrderReducer,deliverOrderReducer} from './reducers/adminReducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// combined reducers
const reducers = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
  products: fetchProductsReducer,
  categories: fetchCategoriesReducer,
  delcategory:deleteProductReducer,
  product:fetchProductReducer,
  updateProd:updateProductReducer,
  addcategory:addCategoryReducer,
  deletecategory:deleteCategoryReducer,
  category:fetchCategoryReducer,
  updateCat:updateCategoryReducer,
  subCategories:fetchSubCategoryReducer,
  productList:fetchProductListReducer,
  subCategorylist:getAllSubCategoriesReducer,
  deletesubcategory:deleteSubCategoryReducer,
  subCategory:getSubCategoryReducer,
  updatesubcat:updateSubCategoryReducer,
  getcustomers:getCustomersReducer,
  deletecustomer:deleteCustomerReducer,
  addtocart:addToCartReducer,
  cartList:fetchCartListReducer,
  cartItemRemove:removeFromCartReducer,
  admins:getAdminsReducer,
  adminstatus:deleteAdminReducer,
  admin:addAdminReducer,
  orders:getOrdersReducer,
  approve:approveOrderReducer,
  orderDetails:getOrderDetailsReducer,
  dispatchedorder:getDispatchedOrderReducer,
  delivered:deliverOrderReducer,
  order:orderReducer,
  userOrders:getOrderReducer

  

})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
