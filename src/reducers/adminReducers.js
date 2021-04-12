import {
    ADMIN_DELETEPRODUCT_REQUEST,
    ADMIN_DELETEPRODUCT_SUCCESS,
    ADMIN_DELETEPRODUCT_FAIL,
    ADMIN_UPDATEPRODUCT_REQUEST,
    ADMIN_UPDATEPRODUCT_SUCCESS,
    ADMIN_UPDATEPRODUCT_FAIL,
    ADMIN_ADDCATEGORY_REQUEST,
    ADMIN_ADDCATEGORY_SUCCESS,
    ADMIN_ADDCATEGORY_FAIL,
    ADMIN_DELETECATEGORY_REQUEST,
    ADMIN_DELETECATEGORY_SUCCESS,
    ADMIN_DELETECATEGORY_FAIL,
    ADMIN_UPDATECATEGORY_REQUEST,
    ADMIN_UPDATECATEGORY_SUCCESS,
    ADMIN_UPDATECATEGORY_FAIL,
    USER_GETALLSUBCATEGORIES_REQUEST,
    USER_GETALLSUBCATEGORIES_SUCCESS,
    USER_GETALLSUBCATEGORIES_FAIL,
    ADMIN_DELETESUBCATEGORY_REQUEST,
    ADMIN_DELETESUBCATEGORY_SUCCESS,
    ADMIN_DELETESUBCATEGORY_FAIL,
    ADMIN_UPDATESUBCATEGORY_REQUEST,
    ADMIN_UPDATESUBCATEGORY_SUCCESS,
    ADMIN_UPDATESUBCATEGORY_FAIL,
    ADMIN_GETSUBCATEGORY_REQUEST,
    ADMIN_GETSUBCATEGORY_SUCCESS,
    ADMIN_GETSUBCATEGORY_FAIL,
    ADMIN_GETCUSTOMERS_REQUEST,
    ADMIN_GETCUSTOMERS_SUCCESS,
    ADMIN_GETCUSTOMERS_FAIL,
    ADMIN_DELETECUSTOMER_REQUEST,
    ADMIN_DELETECUSTOMER_SUCCESS,
    ADMIN_DELETECUSTOMER_FAIL,
    OWNER_GETADMINS_REQUEST,
    OWNER_GETADMINS_SUCCESS,
    OWNER_GETADMINS_FAIL,
    OWNER_DELETEADMIN_REQUEST,
    OWNER_DELETEADMIN_SUCCESS,
    OWNER_DELETEADMIN_FAIL,
    OWNER_DELETADMIN_REQUEST,
    OWNER_DELETADMIN_SUCCESS,
    OWNER_DELETADMIN_FAIL,
    ADMIN_GETORDERS_REQUEST,
    ADMIN_GETORDERS_SUCCESS,
    ADMIN_GETORDERS_FAIL,
    ADMIN_APPROVEORDER_REQUEST,
    ADMIN_APPROVEORDER_SUCCESS,
    ADMIN_APPROVEORDER_FAIL,
    ADMIN_ORDERDETAILS_REQUEST,
    ADMIN_ORDERDETAILS_SUCCESS,
    ADMIN_ORDERDETAILS_FAIL,
    DISPATCHEDORDER_REQUEST,
    DISPATCHEDORDER_SUCCESS,
    DISPATCHEDORDER_FAIL,
    DELIVERORDER_REQUEST,
    DELIVERORDER_SUCCESS,
    DELIVERORDER_FAIL,

    } from '../constants/adminConstants'

    
    export const deliverOrderReducer = (state = {}, action) => {
      switch (action.type) {
        case DELIVERORDER_REQUEST:
          return { load: true }
        case DELIVERORDER_SUCCESS:
          return { load: false, resp: action.payload }
        case DELIVERORDER_FAIL:
          return { load: false, err: action.payload }
        default:
          return state
      }
    }


    export const getDispatchedOrderReducer = (state = {}, action) => {
      switch (action.type) {
        case DISPATCHEDORDER_REQUEST:
          return { loading: true }
        case DISPATCHEDORDER_SUCCESS:
          return { loading: false, response: action.payload }
        case DISPATCHEDORDER_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }
    
    export const getOrderDetailsReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_ORDERDETAILS_REQUEST:
          return { loading: true }
        case ADMIN_ORDERDETAILS_SUCCESS:
          return { loading: false, response: action.payload }
        case ADMIN_ORDERDETAILS_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }

    export const approveOrderReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_APPROVEORDER_REQUEST:
          return { load: true }
        case ADMIN_APPROVEORDER_SUCCESS:
          return { load: false, resp: action.payload }
        case ADMIN_APPROVEORDER_FAIL:
          return { load: false, err: action.payload }
        default:
          return state
      }
    }

    export const getOrdersReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_GETORDERS_REQUEST:
          return { loading: true }
        case ADMIN_GETORDERS_SUCCESS:
          return { loading: false, response: action.payload }
        case ADMIN_GETORDERS_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }

    export const addAdminReducer = (state = {}, action) => {
      switch (action.type) {
        case OWNER_DELETADMIN_REQUEST:
          return { loading: true }
        case OWNER_DELETADMIN_SUCCESS:
          return { loading: false, response: action.payload }
        case OWNER_DELETADMIN_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }

    
    export const deleteAdminReducer = (state = {}, action) => {
      switch (action.type) {
        case OWNER_DELETEADMIN_REQUEST:
          return { load: true }
        case OWNER_DELETEADMIN_SUCCESS:
          return { load: false, resp: action.payload }
        case OWNER_DELETEADMIN_FAIL:
          return { load: false, err: action.payload }
        default:
          return state
      }
    }

    export const getAdminsReducer = (state = {}, action) => {
      switch (action.type) {
        case OWNER_GETADMINS_REQUEST:
          return { loading: true }
        case OWNER_GETADMINS_SUCCESS:
          return { loading: false, response: action.payload }
        case OWNER_GETADMINS_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }

    export const deleteCustomerReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_DELETECUSTOMER_REQUEST:
          return { load: true }
        case ADMIN_DELETECUSTOMER_SUCCESS:
          return { load: false, resp: action.payload }
        case ADMIN_DELETECUSTOMER_FAIL:
          return { load: false, err: action.payload }
        default:
          return state
      }
    }
    


    export const getCustomersReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_GETCUSTOMERS_REQUEST:
          return { loading: true }
        case ADMIN_GETCUSTOMERS_SUCCESS:
          return { loading: false, response: action.payload }
        case ADMIN_GETCUSTOMERS_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }
    export const getSubCategoryReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_GETSUBCATEGORY_REQUEST:
          return { loading: true }
        case ADMIN_GETSUBCATEGORY_SUCCESS:
          return { loading: false, response: action.payload }
        case ADMIN_GETSUBCATEGORY_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }

    
    export const updateSubCategoryReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_UPDATESUBCATEGORY_REQUEST:
          return { load: true }
        case ADMIN_UPDATESUBCATEGORY_SUCCESS:
          return { load: false, resp: action.payload }
        case ADMIN_UPDATESUBCATEGORY_FAIL:
          return { load: false, err: action.payload }
        default:
          return state
      }
    }

    export const deleteSubCategoryReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_DELETESUBCATEGORY_REQUEST:
          return { load: true }
        case ADMIN_DELETESUBCATEGORY_SUCCESS:
          return { load: false, resp: action.payload }
        case ADMIN_DELETESUBCATEGORY_FAIL:
          return { load: false, err: action.payload }
        default:
          return state
      }
    }
    
    export const getAllSubCategoriesReducer = (state = {}, action) => {
      switch (action.type) {
        case USER_GETALLSUBCATEGORIES_REQUEST:
          return { loading: true }
        case USER_GETALLSUBCATEGORIES_SUCCESS:
          return { loading: false, response: action.payload }
        case USER_GETALLSUBCATEGORIES_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }



    export const deleteProductReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_DELETEPRODUCT_REQUEST:
          return { load: true }
        case ADMIN_DELETEPRODUCT_SUCCESS:
          return { load: false, resp: action.payload }
        case ADMIN_DELETEPRODUCT_FAIL:
          return { load: false, err: action.payload }
        default:
          return state
      }
    }

    export const updateProductReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_UPDATEPRODUCT_REQUEST:
          return { load: true }
        case ADMIN_UPDATEPRODUCT_SUCCESS:
          return { load: false, resp: action.payload }
        case ADMIN_UPDATEPRODUCT_FAIL:
          return { load: false, err: action.payload }
        default:
          return state
      }
    }


    
    export const addCategoryReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_ADDCATEGORY_REQUEST:
          return { loading: true }
        case ADMIN_ADDCATEGORY_SUCCESS:
          return { loading: false, response: action.payload }
        case ADMIN_ADDCATEGORY_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }

     export const deleteCategoryReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_DELETECATEGORY_REQUEST:
          return { load: true }
        case ADMIN_DELETECATEGORY_SUCCESS:
          return { load: false, resp: action.payload }
        case ADMIN_DELETECATEGORY_FAIL:
          return { load: false, err: action.payload }
        default:
          return state
      }
    }


    export const updateCategoryReducer = (state = {}, action) => {
      switch (action.type) {
        case ADMIN_UPDATECATEGORY_REQUEST:
          return { load: true }
        case ADMIN_UPDATECATEGORY_SUCCESS:
          return { load: false, resp: action.payload }
        case ADMIN_UPDATECATEGORY_FAIL:
          return { load: false, err: action.payload }
        default:
          return state
      }
    }