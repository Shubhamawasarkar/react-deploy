import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getsubcategories,deleteSubCategory } from '../actions/adminActions'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'

const AdminSubCategoriesScreen = (props) => {
  const dispatch = useDispatch()
  const deletesubcategory = useSelector((store) => store.deletesubcategory)
  const { err, resp, load } = deletesubcategory

  const subCategorylist = useSelector((store) => store.subCategorylist)
  const { error, response, loading } = subCategorylist
  

  useEffect(() => {
    dispatch(getsubcategories())
  }, [])

  useEffect(() => {
    if (resp && resp.status === 'success') {
      document.location.href = '/admin/sub-categories'
    } else if (err) {
      console.log(err)
      alert('error while making API call')
    }
  }, [error, response, loading,resp,err])

  const addSubCategory = () => {
    props.history.push('/admin/add-subcategory')
  }

  const editSubCategory = (subcategoryId) =>{
    props.history.push({
      pathname: '/admin/edit-subcategory',
      state: { id: subcategoryId }
    })
  }
  let history = useHistory();

  const onDeleteSubCategory = (id) => {
    dispatch(deleteSubCategory(id))
  }

  return (
    <div class="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center container p-5">
        <div>
          <button onClick={addSubCategory} className="btn btn-primary float-end">
            Add Sub-Category
          </button>
        </div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>Category</th>
                <th>Category Id</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((subcategories) => {
                  return (
                    <tr>
                      {/* "id": 10, "name": "jkl", "price": 456, "description":
                      "safjjhasjfhasf", "company": "asadas", "image": null,
                      "sub_category_name": "rstu" */}
                      {/* {productId = products.id} */}
                      <td>{subcategories.id}</td>
                      <td>{subcategories.name}</td>
                      <td>{subcategories.category_name}</td>
                      <td>{subcategories.category_id}</td>
                      <td>
                        <button
                          onClick={() => {
                            onDeleteSubCategory(subcategories.id)
                          }}
                          class="btn btn-danger mx-3"
                        >
                          delete
                        </button>

                        <button
                          onClick={() => {
                            editSubCategory(subcategories.id)
                          }}
                          class="btn btn-danger"
                        >
                          Edit
                        </button>
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

export default AdminSubCategoriesScreen
