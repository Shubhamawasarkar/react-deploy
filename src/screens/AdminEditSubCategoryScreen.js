import AdminSidebarNavigation from '../components/AdminSidebarNavigation'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSubCategory,updateSubCategory } from '../actions/adminActions'

const EditSubCategoryScreen = (props) => {
  const [subCategoryName, setSubCategoryName] = useState('')
  const [categoryId, setCategoryId] = useState('')
  

  const subCategory = useSelector((store) => store.subCategory)
  const { loading, response, error } = subCategory

  const updatesubcat = useSelector((store) => store.updatesubcat)
  const { load, resp, err } = updatesubcat

  const dispatch = useDispatch()
  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getSubCategory(props.location.state.id))
  }, [])

  useEffect(() => {
    if (resp && resp.status === 'success') {
        document.location.href = '/admin/sub-categories'
      } else if (err) {
        console.log(err)
        alert('error while making API call')
      }
  }, [error, response, loading,resp,err])



  const onUpdateSubCategory = () =>{
     dispatch(updateSubCategory(props.location.state.id,subCategoryName,categoryId))
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
          response.data.map((subcategories) => {
            return (
              <div>
                <h5>Name : {subcategories.name} </h5>
                <h5>Category Id : {subcategories.id} </h5>
              </div>
            )
          })}
        <div className="form align-center">
          <h2 className="my-5">Edit product details</h2>
          <div className="mb-3 align-center text-center">
            <input
              className="form-control text-center"
              placeholder="Sub-category Name"
              onChange={(e) => {
                setSubCategoryName(e.target.value)
              }}
            ></input>
            <input
              className="form-control text-center"
              placeholder="Category Id"
              onChange={(e) => {
                setCategoryId(e.target.value)
              }}
            ></input>
          </div>

          <div className="mb-3">
            <button
              onClick={() => {
                onUpdateSubCategory()
              }}
              className="btn btn-success"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditSubCategoryScreen
