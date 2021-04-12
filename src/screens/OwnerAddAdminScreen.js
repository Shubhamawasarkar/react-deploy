import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AdminSidebarNavigation from "../components/AdminSidebarNavigation"
import { getAdmins,deleteAdmin } from '../actions/adminActions'


const OwnerAddAdminScreen = (props) => {
 
  const dispatch = useDispatch()
  const admins = useSelector((store) => store.admins)
    const { error, response, loading } = admins

    const adminstatus = useSelector((store) => store.adminstatus)
    const { err, resp, load } = adminstatus

    useEffect(() => {
      if (resp && resp.status === 'success') {
        document.location.href = '/owner/admin'
      } else if (err) {
        console.log(err)
        alert('error while making API call')
    }
  }, [error, response, loading,resp,err])

  useEffect(() => {
    dispatch(getAdmins())
  }, [])

  const onDeleteAdmin = (id) => {
    dispatch(deleteAdmin(id))
  }
  const addAdmin = () => {
    props.history.push('/owner/add-admin')
  }
  
  return (
    <div class="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center container p-5">
      <div>
          <button onClick={addAdmin} className="btn btn-primary float-end">
            Add Admin
          </button>
        </div>
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
                response.data.map((admin) => {
                  return (
                    <tr>
                      <td>{admin.firstName}</td>
                      <td>{admin.lastName}</td>
                      <td>{admin.email}</td>
                      <td>{admin.address}</td>
                      <td>{admin.mobile}</td>
                      <td>
                        <button
                          onClick={() => {
                            onDeleteAdmin(admin.id)
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

export default OwnerAddAdminScreen
