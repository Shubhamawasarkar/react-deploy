import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'

import { getProduct } from '../actions/userActions'
import { updateProduct } from '../actions/adminActions'

const EditProductScreen = (props) => {
    const [productName, setProductName] = useState('')
    const  [description, setDescription] = useState('')
    const [price , setPrice] = useState('')
    const [company, setCompany] = useState('')
    const [subCategory, setSubCategory] = useState('')

  const product = useSelector((store) => store.product)
  const { loading, response, error } = product

  const updateProd = useSelector((store) => store.updateProd)
  const { load, resp, err } = updateProd

  const dispatch = useDispatch()
  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getProduct(props.location.state.id))
  }, [])

  useEffect(() => {
    if (resp && resp.status === 'success') {
        document.location.href = '/admin/products'
      } else if (err) {
        console.log(err)
        alert('error while making API call')
      }
  }, [error, response, loading,resp])



  const onUpdateProduct = () =>{
     dispatch(updateProduct(props.location.state.id,productName, description, price, company, subCategory))
  }

  return (
    <div className="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center align-center w-50 container">
        <h2>Current details</h2>
        {response &&
          response.data &&
          response.data.length > 0 &&
          response.data.map((product) => {
            return <div>
                <h5>Name : {product.name} </h5>
               <h5>Description : {product.description}</h5> 
               <h5>Price : {product.price}</h5> 
               <h5>Company : {product.company}</h5>
               <h5>Sub Category :{ product.sub_category}</h5>
                </div>
          })}
        {/* <div class="col-md-2"></div> */}
        <div className="form align-center">
          {/* <div className="mb-3">
            <label className="form-label">Product</label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              className="form-control"
            ></input>
          </div> */}
          {/* <h3>{props.location.state.id}</h3> */}
          <h2 className="my-5">Edit product details</h2>
          <div className="mb-3 align-center text-center">
      
            <input
              className="form-control text-center"
              placeholder="Product Name"
              onChange={(e) => {
                setProductName(e.target.value)
              }}
            ></input>
          </div>
          <div className="mb-3 align-center text-center">
        
            <input
              type="textarea"
              className="form-control text-center"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            ></input>
          </div>
          <div className="mb-3">
           
            <input className="form-control text-center" placeholder="Price" onChange={(e) => {
                setPrice(e.target.value)
              }}></input>
          </div>

          <div className="mb-3">
        
            <input
              className="form-control text-center"
              placeholder="Company of product"
              onChange={(e) => {
                setCompany(e.target.value)
              }}
            ></input>
          </div>
          <div className="mb-3">
         
            <input
              className="form-control text-center"
              placeholder="Sub category ID"
              onChange={(e) => {
                setSubCategory(e.target.value)
              }}
            ></input>
          </div>
          <div className="mb-3">
            <button onClick={ () => {onUpdateProduct() }} className="btn btn-success">
                Update 
        </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProductScreen
