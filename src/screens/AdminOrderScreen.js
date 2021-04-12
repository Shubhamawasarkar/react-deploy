import AdminSidebarNavigation from '../components/AdminSidebarNavigation'
import { getorders,approveOrder } from '../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const AdminOrderScreen = (props) => {

  const dispatch = useDispatch()
  const orders = useSelector((store) => store.orders)
  const { error, response, loading } = orders


  

  useEffect(() => {
    dispatch(getorders())
  }, [])

  const viewOederDetails = (orderId) =>{
    props.history.push({
      pathname: '/admin/order-details',
      state: { id: orderId }
    })
  }



  return (
    <div className="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center container p-5">
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Amount</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((order) => {
                  return (
                    <tr>
                      <td>{order.firstName} {order.lastName}</td>
                      <td>{order.mobile}</td>
                      <td>{order.address}</td>
                      <td>{order.totalPrice}</td>
                      <td>{order.orderDate}</td>
                      <td>{order.status}</td>
                      <td>
                        <button
                         onClick={() =>  {
                          viewOederDetails(order.id)}}
                          // onClick={() => {
                          //   onApproveOrder(order.id)
                          // }}
                          class="btn btn-info mx-3"
                        >
                          Order Details
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

export default AdminOrderScreen
