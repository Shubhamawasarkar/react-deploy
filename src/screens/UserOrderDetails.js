import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails } from '../actions/adminActions'

const UserOrderDetails = (props) => {
  const dispatch = useDispatch()
  const orderDetails = useSelector((store) => store.orderDetails)
  const { error, response, loading } = orderDetails
  useEffect(() => {
    dispatch(getOrderDetails(props.location.state.id))
  }, [])
  return (
    <div>
      <div className="row">
        <div class="container p-5">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserOrderDetails
