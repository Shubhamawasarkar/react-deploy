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
import axios from 'axios'


export const getUserOrders = () => {
  return (dispatch) => {
    dispatch({
      type: USER_GETORDER_REQUEST,
     
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }


    const url = `${process.env.REACT_APP_URL}/order/user`
    
    axios
      .get(url,header)
      
      .then((response) => {
        dispatch({
          type: USER_GETORDER_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_GETORDER_FAIL,
          payload: error,
        })
      })
  }
}

export const makeOrder = () => {
  let dummy = 'abc'
  return (dispatch) => {
    dispatch({
      type: USER_ORDER_REQUEST,
    })

    const body = {
      dummy,
    }

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }


    const url = `${process.env.REACT_APP_URL}/order/process`
    axios
      .post(url,body, header)
      .then((response) => {
        dispatch({
          type: USER_ORDER_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_ORDER_FAIL,
          payload: error,
        })
      })
      console.log(sessionStorage['token'])
  }
 
}



export const deleteCartItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: USER_DELETECART_REQUEST,
     
    })
    const header = {
      headers: {
        'Content-Type': 'application/json',
        'token': sessionStorage['token'],
      },
    }

    const url = `${process.env.REACT_APP_URL}/cart/${id}`
    
    axios
      .delete(url,header)
      
      .then((response) => {
        dispatch({
          type: USER_DELETECART_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_DELETECART_FAIL,
          payload: error,
        })
      })


  }
}

export const getCartList = () => {
  return (dispatch) => {
    dispatch({
      type: USER_GETCARTLIST_REQUEST,
     
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }


    const url = `${process.env.REACT_APP_URL}/cart`
    
    axios
      .get(url,header)
      
      .then((response) => {
        dispatch({
          type: USER_GETCARTLIST_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_GETCARTLIST_FAIL,
          payload: error,
        })
      })
  }
}



export const addToCart = (token, product, quantity) => {
  return (dispatch) => {
    dispatch({
      type: USER_ADDTOCART_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        'token' : token,
      },
    }

    const body = {
      product,
      quantity
    }
    const url = `${process.env.REACT_APP_URL}/cart`
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_ADDTOCART_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_ADDTOCART_FAIL,
          payload: error,
        })
      })
  }
}




export const getProductList = (subCategoryId) => {
  return (dispatch) => {
    dispatch({
      type: USER_GETPRODUCTLIST_REQUEST,
     
    })


    const url = `${process.env.REACT_APP_URL}/product/category/${subCategoryId}`
    
    axios
      .get(url)
      
      .then((response) => {
        dispatch({
          type: USER_GETPRODUCTLIST_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_GETPRODUCTLIST_FAIL,
          payload: error,
        })
      })
  }
}


export const getCategory = (id) => {
  return (dispatch) => {
    dispatch({
      type: USER_GETCATEGORY_REQUEST,
     
    })


    const url = `${process.env.REACT_APP_URL}/category/${id}`
    
    axios
      .get(url)
      
      .then((response) => {
        dispatch({
          type: USER_GETCATEGORY_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_GETCATEGORY_FAIL,
          payload: error,
        })
      })
  }
}

export const getProduct = (productId) => {
  return (dispatch) => {
    dispatch({
      type: USER_GETPRODUCT_REQUEST,
     
    })
    const url = `${process.env.REACT_APP_URL}/product/${productId}`
    
    axios
      .get(url)
      
      .then((response) => {
        dispatch({
          type: USER_GETPRODUCT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_GETPRODUCT_FAIL,
          payload: error,
        })
      })
  }
}

export const getproducts = () => {
  return (dispatch) => {
    dispatch({
      type: USER_GETPRODUCTS_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = `${process.env.REACT_APP_URL}/product`
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: USER_GETPRODUCTS_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_GETPRODUCTS_FAIL,
          payload: error,
        })
      })
  }
}


export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('name')
    dispatch({ type: USER_SIGNOUT })
    document.location.href = '/'
  }
}

export const signup = (firstName, lastName, email, password,address,mobile) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      firstName,
      lastName,
      email,
      password,
      address,
      mobile
    }
    const url = `${process.env.REACT_APP_URL}/user/signup`
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      email,
      password,
    }
    const url = `${process.env.REACT_APP_URL}/user/signin`
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
         
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        })
      })
      
  }
}


export const getcategories = () => {
  return (dispatch) => {
    dispatch({
      type: USER_GETCATEGORIES_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = `${process.env.REACT_APP_URL}/category`
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: USER_GETCATEGORIES_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_GETCATEGORIES_FAIL,
          payload: error,
        })
      })
  }
}

export const getSubCategories = (id) => {
  return (dispatch) => {
    dispatch({
      type: USER_GETSUBCATEGORIES_REQUEST,
     
    })

    const url = `${process.env.REACT_APP_URL}/sub-category/${id}`
    
    axios
      .get(url
      )
      
      .then((response) => {
        dispatch({
          type: USER_GETSUBCATEGORIES_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_GETSUBCATEGORIES_FAIL,
          payload: error,
        })
      })


  }
}

