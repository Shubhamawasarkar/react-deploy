import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'

import { getCategory } from '../actions/userActions'
import { updateCategory } from '../actions/adminActions'

const EditCategoryScreen = (props) => {
    const [categoryName, setCategoryName] = useState('')

  const category = useSelector((store) => store.category)
  const { loading, response, error } = category

  const updateCat = useSelector((store) => store.updateCat)
  const { load, resp, err } = updateCat

  const dispatch = useDispatch()
  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getCategory(props.location.state.id))
  }, [])

  useEffect(() => {
    if (resp && resp.status === 'success') {
        document.location.href = '/admin/categories'
      } else if (err) {
        console.log(err)
        alert('error while making API call')
      }
  }, [error, response, loading,resp])



  const onUpdateCategory = () =>{
     dispatch(updateCategory(props.location.state.id,categoryName))
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
          response.data.map((categories) => {
            return <div>
                <h5>Name : {categories.name} </h5>
                </div>
          })}
        <div className="form align-center">
          <h2 className="my-5">Edit product details</h2>
          <div className="mb-3 align-center text-center">
      
            <input
              className="form-control text-center"
              placeholder="Product Name"
              onChange={(e) => {
                setCategoryName(e.target.value)
              }}
            ></input>
          </div>
          
          <div className="mb-3">
            <button onClick={ () => {onUpdateCategory() }} className="btn btn-success">
                Update 
        </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCategoryScreen
