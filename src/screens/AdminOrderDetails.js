import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { approveOrder, getOrderDetails } from '../actions/adminActions'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'

const AdminOrderDetails = (props) => {
  const dispatch = useDispatch()
  const orderDetails = useSelector((store) => store.orderDetails)
  const { error, response, loading } = orderDetails
  
  const approve = useSelector((store) => store.approve)
  const { err, resp, load } = approve

  useEffect(() => {
    if (resp && resp.status === 'success') {
      document.location.href = '/admin/orders'
    } else if (err) {
      console.log(err)
      alert('error while making API call')
    }
  }, [error, response, loading,resp,err])

    const onApproveOrder = (id) => {
    dispatch(approveOrder(id))
  }

  useEffect(() => {
    dispatch(getOrderDetails(props.location.state.id))
  }, [])
  return (
    <div>
      <div className="row">
        <div class="col-md-2">
          <AdminSidebarNavigation />
        </div>
        <div class="col-md-10 text-center container p-5">
          <div>
            <h2>Order Details</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {response &&
                  response.data &&
                  response.data.length > 0 &&
                  response.data.map((order) => {
                    return (
                      <tr>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                        <td>{order.quantity}</td>

                        {/* <td>
                        

                      </td> */}
                      </tr>
                    )
                  })}
              </tbody>
            </table>
            <button
              onClick={() => {
                onApproveOrder(props.location.state.id)
              }}
              class="btn btn-danger mx-3"
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOrderDetails
