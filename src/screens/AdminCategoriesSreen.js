import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getcategories } from '../actions/userActions'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'
import { deleteCategory } from '../actions/adminActions'

const AdminCategoriesScreen = (props) => {
  const dispatch = useDispatch()
  const category = useSelector((store) => store.deletecategory)
  const { err, resp, load } = category

  const showcategories = useSelector((store) => store.categories)
  const { error, response, loading } = showcategories
  

  useEffect(() => {
    dispatch(getcategories())
  }, [])

  useEffect(() => {
    if (resp && resp.status === 'success') {
      document.location.href = '/admin/categories'
    } else if (err) {
      console.log(err)
      alert('error while making API call')
    }
  }, [error, response, loading, resp, err])

  const addCategory = () => {
    props.history.push('/admin/add-category')
  }

  const editCategory = (categoryId) =>{
    console.log(categoryId)
    props.history.push({
      pathname: '/admin/edit-category',
      state: { id: categoryId }
    })
  }
  let history = useHistory();

  const onDeleteCategory = (id) => {
    dispatch(deleteCategory(id))
  }

  return (
    <div class="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center container p-5">
        <div>
          <button onClick={addCategory} className="btn btn-primary float-end">
            Add Category
          </button>
        </div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((categories) => {
                  return (
                    <tr>
                      {/* "id": 10, "name": "jkl", "price": 456, "description":
                      "safjjhasjfhasf", "company": "asadas", "image": null,
                      "sub_category_name": "rstu" */}
                      {/* {productId = products.id} */}
                      <td>{categories.id}</td>
                      <td>{categories.name}</td>
                      <td>
                        <button
                          onClick={() => {
                            onDeleteCategory(categories.id)
                          }}
                          class="btn btn-danger mx-3"
                        >
                          delete
                        </button>

                        <button
                        onClick={() =>  {
                          editCategory(categories.id)}}
                        class="btn btn-danger">Edit</button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}

export default AdminCategoriesScreen
