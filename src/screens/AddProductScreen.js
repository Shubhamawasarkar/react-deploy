import { useState } from 'react'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'
import axios from 'axios'

const AddProductScreen = (props) => {
  
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [company, setCompany] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const onUpload = () =>{
    const formData = new FormData
    formData.append('name',name)   
    formData.append('description',description)  
    formData.append('price',price) 
    formData.append('company',company) 
    formData.append('sub_category',subCategory) 
    formData.append('image',selectedFile) 
    console.log(`filename :${selectedFile}`) 
     axios
     .post(`${process.env.REACT_APP_URL}/product`,formData)
     .then(response => {
       props.history.push('/admin/products')
     })
}
  return (
    <div className="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center align-center w-50 container">
          {/* <div class="col-md-2"></div> */}
        <div className="form align-center">
          <h2 className="my-5">Enter product details</h2>
          <div className="mb-3 align-center text-center">
            {/* <label className="form-label">Description</label> */}
            <input
             onChange={(e) => {
              setName(e.target.value)}}
              className="form-control text-center"
              placeholder="Product Name"
            ></input>
          </div>
          <div className="mb-3 align-center text-center">
            {/* <label className="form-label">Description</label> */}
            <input type="textarea"
             onChange={(e) => {
              setDescription(e.target.value)}}
              className="form-control text-center"
              placeholder="Description"
            ></input>
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Price</label> */}
            <input
             onChange={(e) => {
              setPrice(e.target.value)}}
              className="form-control text-center"
              placeholder="Price"
            />
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Company</label> */}
            <input
             onChange={(e) => {
              setCompany(e.target.value)}}
              className="form-control text-center"
              placeholder="Company of product"
            ></input>
          </div>
          <div className="mb-3">
            {/* <label className="form-label">Sub category</label> */}
            <input
             onChange={(e) => {
              setSubCategory(e.target.value)}}
              className="form-control text-center"
              placeholder="Sub category ID"
            ></input>
          </div>
          <div className="mb-3 align-center text-center">
            {/* <label className="form-label">Description</label> */}
            <input type="file"
                onChange={(event) => {
                    setSelectedFile(event.target.files[0])}}
              className="form-control text-center"
            ></input>
          </div>
          <div className="mb-3">
            <button onClick={ () => {onUpload() }} className="btn btn-success">Submit</button>
          </div>
          {/* <div className="mb-3">
            <button  className="btn btn-success">
              Submit
            </button>
          </div> */}
          
        </div>
      </div>
    </div>
  )
}

export default AddProductScreen
