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
  import axios from 'axios'

  export const  deliverOrder = (id) => {
    return (dispatch) => {
      dispatch({
        type: DELIVERORDER_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          'token': sessionStorage['token'],
        },
      }
  
      const url = `${process.env.REACT_APP_URL}/order-details/${id}`
      axios
        .put(url, header)
        .then((response) => {
          dispatch({
            type: DELIVERORDER_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: DELIVERORDER_FAIL,
            payload: error,
          })
        })
    }
  }


  export const  getDispatchedorders = () => {
    return (dispatch) => {
      dispatch({
        type: DISPATCHEDORDER_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          'token': sessionStorage['token'],
        },
      }
  
      const url = `${process.env.REACT_APP_URL}/order-details`
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: DISPATCHEDORDER_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: DISPATCHEDORDER_FAIL,
            payload: error,
          })
        })
    }
  }


  export const  getOrderDetails = (id) => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_ORDERDETAILS_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          'token': sessionStorage['token'],
        },
      }
  
      const url = `${process.env.REACT_APP_URL}/order-details/${id}`
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: ADMIN_ORDERDETAILS_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_ORDERDETAILS_FAIL,
            payload: error,
          })
        })
    }
  }

  export const  approveOrder = (id) => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_APPROVEORDER_REQUEST,
      })
  
      const header = {
        headers: {
          
          'Content-Type': 'application/json',
          'token': sessionStorage['token'],
          
        },
      }
      const url =`${process.env.REACT_APP_URL}/order/approve/${id}`
      axios
        .put(url,header)
        .then((response) => {
          dispatch({
            type: ADMIN_APPROVEORDER_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_APPROVEORDER_FAIL,
            payload: error,
          })
        })
        console.log(sessionStorage['token'])
    }
    
  }


  export const  getorders = () => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_GETORDERS_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          'token': sessionStorage['token'],
        },
      }
  
      const url = `${process.env.REACT_APP_URL}/order`
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: ADMIN_GETORDERS_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_GETORDERS_FAIL,
            payload: error,
          })
        })
    }
  }
  

  export const addAdmin = (firstName, lastName, email, password,address,mobile) => {
    return (dispatch) => {
      dispatch({
        type: OWNER_DELETADMIN_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          'token': sessionStorage['token'],
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
      const url = `${process.env.REACT_APP_URL}/user/add-admin`
      axios
        .post(url, body, header)
        .then((response) => {
          dispatch({
            type:  OWNER_DELETADMIN_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: OWNER_DELETADMIN_FAIL,
            payload: error,
          })
        })
    }
  }

  export const deleteAdmin = (id) => {
    return (dispatch) => {
      dispatch({
        type: OWNER_DELETEADMIN_REQUEST,
       
      })
      const header = {
        headers: {
          'Content-Type': 'application/json',
          'token': sessionStorage['token'],
        },
      }
  
      const url = `${process.env.REACT_APP_URL}/user/${id}`
      
      axios
        .delete(url,header)
        
        .then((response) => {
          dispatch({
            type: OWNER_DELETEADMIN_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: OWNER_DELETEADMIN_FAIL,
            payload: error,
          })
        })
  
  
    }
  }
  

  export const  getAdmins = () => {
    return (dispatch) => {
      dispatch({
        type: OWNER_GETADMINS_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          'token': sessionStorage['token'],
        },
      }
  
      const url = `${process.env.REACT_APP_URL}/admin`
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: OWNER_GETADMINS_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: OWNER_GETADMINS_FAIL,
            payload: error,
          })
        })
    }
  }

  export const deleteCustomer = (id) => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_DELETECUSTOMER_REQUEST,
       
      })
      const header = {
        headers: {
          'Content-Type': 'application/json',
          'token': sessionStorage['token'],
        },
      }
  
      const url = `${process.env.REACT_APP_URL}/user/${id}`
      
      axios
        .delete(url,header)
        
        .then((response) => {
          dispatch({
            type: ADMIN_DELETECUSTOMER_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_DELETECUSTOMER_FAIL,
            payload: error,
          })
        })
  
  
    }
  }
  
  
  export const  getCustomers = () => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_GETCUSTOMERS_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          'token': sessionStorage['token'],
        },
      }
  
      const url = `${process.env.REACT_APP_URL}/user`
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: ADMIN_GETCUSTOMERS_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_GETCUSTOMERS_FAIL,
            payload: error,
          })
        })
    }
  }

  export const getSubCategory = (id) => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_GETSUBCATEGORY_REQUEST,
       
      })
  
      const url = `${process.env.REACT_APP_URL}/sub-category/edit/${id}`
      
      axios
        .get(url)
        .then((response) => {
          dispatch({
            type: ADMIN_GETSUBCATEGORY_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_GETSUBCATEGORY_FAIL,
            payload: error,
          })
        })
  
  
    }
  }

  
  export const updateSubCategory = (id,name,category_id) => {
    return (dispatch) => {
      dispatch({
        type:  ADMIN_UPDATESUBCATEGORY_REQUEST,
       
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const body = {
        name,
        category_id,
      }
      const url =`${process.env.REACT_APP_URL}/sub-category/${id}`
      
      axios
        .put(url,body,header)
        
        .then((response) => {
          dispatch({
            type: ADMIN_UPDATESUBCATEGORY_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_UPDATESUBCATEGORY_FAIL,
            payload: error,
          })
        })


    }
   
  }

  
export const deleteSubCategory = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_DELETESUBCATEGORY_REQUEST,
     
    })

    const url = `${process.env.REACT_APP_URL}/sub-category/${id}`
    
    axios
      .delete(url
      )
      
      .then((response) => {
        dispatch({
          type: ADMIN_DELETESUBCATEGORY_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_DELETESUBCATEGORY_FAIL,
          payload: error,
        })
      })


  }
}



 

  export const  getsubcategories = () => {
    return (dispatch) => {
      dispatch({
        type: USER_GETALLSUBCATEGORIES_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const url = `${process.env.REACT_APP_URL}/sub-category`
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: USER_GETALLSUBCATEGORIES_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: USER_GETALLSUBCATEGORIES_FAIL,
            payload: error,
          })
        })
    }
  }



export const deleteProduct = (productId) => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_DELETEPRODUCT_REQUEST,
       
      })
  
      const url = `${process.env.REACT_APP_URL}/product/${productId}`
      
      axios
        .delete(url
        )
        
        .then((response) => {
          dispatch({
            type: ADMIN_DELETEPRODUCT_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_DELETEPRODUCT_FAIL,
            payload: error,
          })
        })


    }
  }

  
  export const updateProduct = (id,name, description, price, company, sub_category) => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_UPDATEPRODUCT_REQUEST,
       
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const body = {
        name,
        description,
        price,
        company,
        sub_category,
      }
  
      const url = `${process.env.REACT_APP_URL}/product/${id}`
      
      axios
        .put(url,body,header)
        
        .then((response) => {
          dispatch({
            type: ADMIN_UPDATEPRODUCT_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_UPDATEPRODUCT_FAIL,
            payload: error,
          })
        })


    }
   
  }


  export const addCategory = (name) => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_ADDCATEGORY_REQUEST,
       
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const body = {
        name,
      }
  
      const url = `${process.env.REACT_APP_URL}/category`
      
      axios
        .post(url,body,header)
        
        .then((response) => {
          dispatch({
            type: ADMIN_ADDCATEGORY_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_ADDCATEGORY_FAIL,
            payload: error,
          })
        })


    }
   
  }




  export const deleteCategory = (categoryId) => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_DELETECATEGORY_REQUEST,
       
      })
  
      const url = `${process.env.REACT_APP_URL}/category/${categoryId}`
      
      axios
        .delete(url
        )
        
        .then((response) => {
          dispatch({
            type: ADMIN_DELETECATEGORY_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_DELETECATEGORY_FAIL,
            payload: error,
          })
        })


    }
  }

  export const updateCategory = (id,name) => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_UPDATECATEGORY_REQUEST,
       
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const body = {
        name,
      }
  
      const url = `${process.env.REACT_APP_URL}/category/${id}`
      
      axios
        .put(url,body,header)
        
        .then((response) => {
          dispatch({
            type: ADMIN_UPDATECATEGORY_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_UPDATECATEGORY_FAIL,
            payload: error,
          })
        })


    }
   
  }
