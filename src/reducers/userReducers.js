import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_GETPRODUCTS_REQUEST,
  USER_GETPRODUCTS_SUCCESS,
  USER_GETPRODUCTS_FAIL,
  USER_GETCATEGORIES_REQUEST,
  USER_GETCATEGORIES_SUCCESS,
  USER_GETCATEGORIES_FAIL,
  USER_GETPRODUCT_REQUEST,
  USER_GETPRODUCT_SUCCESS,
  USER_GETPRODUCT_FAIL,
  USER_GETCATEGORY_REQUEST,
  USER_GETCATEGORY_SUCCESS,
  USER_GETCATEGORY_FAIL,
  USER_GETSUBCATEGORIES_REQUEST,
  USER_GETSUBCATEGORIES_SUCCESS,
  USER_GETSUBCATEGORIES_FAIL,
  USER_GETPRODUCTLIST_REQUEST,
  USER_GETPRODUCTLIST_SUCCESS,
  USER_GETPRODUCTLIST_FAIL,
  USER_ADDTOCART_REQUEST,
  USER_ADDTOCART_SUCCESS,
  USER_ADDTOCART_FAIL,
  USER_GETCARTLIST_REQUEST,
  USER_GETCARTLIST_SUCCESS,
  USER_GETCARTLIST_FAIL,
  USER_DELETECART_REQUEST,
  USER_DELETECART_SUCCESS,
  USER_DELETECART_FAIL,
  USER_ORDER_REQUEST,
  USER_ORDER_SUCCESS,
  USER_ORDER_FAIL,
  USER_GETORDER_REQUEST,
  USER_GETORDER_SUCCESS,
  USER_GETORDER_FAIL,
} from '../constants/userConstants'

export const getOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GETORDER_REQUEST:
      return { loading: true }
    case USER_GETORDER_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_GETORDER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}



export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ORDER_REQUEST:
      return { lod: true }
    case USER_ORDER_SUCCESS:
      return { lod: false, res: action.payload }
    case USER_ORDER_FAIL:
      return { lod: false, er: action.payload }
    default:
      return state
  }
}


export const removeFromCartReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETECART_REQUEST:
      return { load: true }
    case USER_DELETECART_SUCCESS:
      return { load: false, resp: action.payload }
    case USER_DELETECART_FAIL:
      return { load: false, err: action.payload }
    default:
      return state
  }
}




export const fetchCartListReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GETCARTLIST_REQUEST:
      return { loading: true }
    case USER_GETCARTLIST_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_GETCARTLIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}




export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true }
    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true }
    case USER_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNOUT:
      return {}
    default:
      return state
  }
}


export const fetchProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GETPRODUCTS_REQUEST:
      return { loading: true }
    case USER_GETPRODUCTS_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_GETPRODUCTS_FAIL:
      return { loading: false, error: action.payload }
    // case NOTE_FETCH_RESET:
    //   return {}
    default:
      return state
  }
}


export const fetchCategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GETCATEGORIES_REQUEST:
      return { loading: true }
    case USER_GETCATEGORIES_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_GETCATEGORIES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const fetchProductReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GETPRODUCT_REQUEST:
      return { loading: true }
    case USER_GETPRODUCT_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_GETPRODUCT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const fetchCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GETCATEGORY_REQUEST:
      return { loading: true }
    case USER_GETCATEGORY_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_GETCATEGORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const fetchSubCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GETSUBCATEGORIES_REQUEST:
      return { loading: true }
    case USER_GETSUBCATEGORIES_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_GETSUBCATEGORIES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const fetchProductListReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GETPRODUCTLIST_REQUEST:
      return { loading: true }
    case USER_GETPRODUCTLIST_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_GETPRODUCTLIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const addToCartReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADDTOCART_REQUEST:
      return { load: true }
    case USER_ADDTOCART_SUCCESS:
      return { load: false, resp: action.payload }
    case USER_ADDTOCART_FAIL:
      return { load: false, err: action.payload }
    default:
      return state
  }
}

