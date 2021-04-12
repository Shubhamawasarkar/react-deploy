import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'
import {addCategory} from '../actions/adminActions'





const AdminAddCategoryScreen = (props) => {
  const [name, setName] = useState('')
  const category = useSelector((store) => store.addcategory)
  const { loading, response, error } = category

  useEffect(() => {
    if (response && response.status === 'success') {
        document.location.href = '/admin/categories'
      } else if (error) {
        console.log(error)
        alert('error while making API call')
      }
  }, [error, response, loading])

  const dispatch = useDispatch()

const onAddCategory = () =>{
  dispatch(addCategory(name))
}
  return (
    <div className="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center align-center w-50 container">
        <div className="form align-center">
          <h2 className="my-5">Enter Category name you want to add</h2>
          <div className="mb-3 align-center text-center">
            <input onChange={(e) => {
                setName(e.target.value)
              }}
              className="form-control text-center"
              placeholder="Name"
            ></input>
            <div className="m-3">
              <button onClick={ () => {onAddCategory() }} className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAddCategoryScreen
