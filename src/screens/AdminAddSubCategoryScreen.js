import { useState } from 'react'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'
import axios from 'axios'

const AdminAddSubCategoryScreen = (props) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)



const onUpload = () =>{
    const formData = new FormData
    formData.append('name',name)   
    formData.append('category_id',category)   
    formData.append('image',selectedFile) 
    console.log(`filename :${selectedFile}`) 
     axios
     .post(`${process.env.REACT_APP_URL}/sub-category`,formData)
     .then(response => {
       props.history.push('/admin/sub-categories')
     })
}
  return (
    <div className="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center align-center w-50 container">
        <div className="form align-center">
          <h2 className="my-5">Enter Sub category details</h2>
          <div className="mb-3 align-center text-center">
            {/* <label className="form-label">Description</label> */}
            <input
              className="form-control text-center"
              placeholder="Sub category Name"
              onChange={(e) => {
                setName(e.target.value)}}
            ></input>
          </div>
          <div className="mb-3 align-center text-center">
            {/* <label className="form-label">Description</label> */}
            <input
              className="form-control text-center"
              placeholder="category Id"
              onChange={(e) => {
                setCategory(e.target.value)}}
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
        </div>

        {/* <img src="http://localhost:4000/71ae51dcab22759575eae73f6a3f2ff0"></img> */}
      </div>
    </div>
  )
}

export default AdminAddSubCategoryScreen
