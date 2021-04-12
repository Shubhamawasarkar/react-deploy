import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getCustomers,deleteCustomer } from '../actions/adminActions'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'


const AdminCustomersScreen = (props) => {
 
    const dispatch = useDispatch()
    
  
    const getcustomers = useSelector((store) => store.getcustomers)
    const { error, response, loading } = getcustomers

    const deletecustomer = useSelector((store) => store.deletecustomer)
    const { err, resp, load } = deletecustomer
    
  
    useEffect(() => {
      dispatch(getCustomers())
    }, [])
  
    
    useEffect(() => {
        if (resp && resp.status === 'success') {
            document.location.href = '/admin/customers'
          } else if (err) {
            console.log(err)
            alert('error while making API call')
        }
    }, [error, response, loading,resp,err])
  
    const onDeleteCustomer = (id) => {
        dispatch(deleteCustomer(id))
      }
    

  return (
    <div class="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center container p-5">
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((customers) => {
                  return (
                    <tr>
                      <td>{customers.firstName}</td>
                      <td>{customers.lastName}</td>
                      <td>{customers.email}</td>
                      <td>{customers.address}</td>
                      <td>{customers.mobile}</td>
                      <td>
                        <button
                          onClick={() => {
                            onDeleteCustomer(customers.id)
                         }}
                          class="btn btn-danger mx-3"
                        >
                          Delete
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

export default AdminCustomersScreen
