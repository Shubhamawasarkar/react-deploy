
import { getUserOrders } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
const UserOrderHistory = (props) => {

  const dispatch = useDispatch()
  const orders = useSelector((store) => store.userOrders)
  const { error, response, loading } = orders

  useEffect(() => {
    dispatch(getUserOrders())
  }, [])
  const onOrderDetails = (orderId) =>{
    props.history.push({
      pathname: '/user/order-details',
      state: { id: orderId }
    })
  }
 let i=0;
  return (
    <div class="col-md-10 text-center container p-5">
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              
              <th>Order Date</th>
              <th>Amount</th>
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
                   <td>{++i}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.status}</td>
                    <td>
                      <button
                        onClick={() => {
                          onOrderDetails(order.id)
                        }}
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
  )
}

export default UserOrderHistory
