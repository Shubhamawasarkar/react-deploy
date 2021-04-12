import { useEffect, useState  } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import { deleteProduct } from '../actions/adminActions'
import { getproducts } from '../actions/userActions'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'

const AdminProductScreen = (props) => {
  // s
  const dispatch = useDispatch()
  const products = useSelector((store) => store.products)
  const { error, response, loading } = products
  const delproduct = useSelector((store) => store.delcategory)
  const { err, resp, load } = delproduct

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getproducts())
  }, [])

  useEffect(() => {
    if (resp && resp.status === 'success') {
      document.location.href = '/admin/products'
    } else if (err) {
      console.log(err)
      alert('error while making API call')
    }
  }, [error, response, loading,resp,err])

  const addProduct = () => {
    props.history.push('/add-product')
  }
  const editProduct = (productId) =>{
    console.log(productId)
    props.history.push({
      pathname: '/edit-product',
      state: { id: productId }
    })
  }
  let history = useHistory();

  


  const onDeleteProduct = (productId) =>{
    console.log(productId)
    dispatch(deleteProduct(productId))
  }

  return (
    <div className="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center container p-5">
        <div>
          <button onClick={addProduct} className="btn btn-primary float-end">
            Add Product
          </button>
        </div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                
                <th>NAME</th>
                <th>PRICE</th>
                <th>COMPANY</th>
                <th>SUB CATEGORY</th>
                <th>SUB CATEGORY ID</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((products) => {
                  return (
                    <tr>
                      <td>{products.name}</td>
                      <td>{products.price}</td>
                      <td>{products.company}</td>
                      <td>{products.sub_category_name}</td>
                      <td>{products.sub_category_id}</td>
                      <td>
                        <button
                        
                          onClick={() =>  {
                            onDeleteProduct(products.id)}
                          }
                          class="btn btn-danger mx-3"
                        >
                          delete
                        </button>
                       
                        <button  onClick={() =>  {
                            editProduct(products.id)}} class="btn btn-danger">Edit</button>
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

export default AdminProductScreen
