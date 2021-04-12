import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deliverOrder, getDispatchedorders } from "../actions/adminActions"

const DeliveryBoyScreen = (props) => {
    const dispatch = useDispatch()
    const dispatchedorder = useSelector((store) => store.dispatchedorder)
    const { error, response, loading } = dispatchedorder

    const delivered = useSelector((store) => store.delivered)
    const { err, resp, load } = delivered

    useEffect(() => {
        dispatch(getDispatchedorders())
      }, [])
      useEffect(() => {
        if (resp && resp.status === 'success') {
          document.location.href = ''
        } else if (err) {
          console.log(err)
          alert('error while making API call')
        }
      }, [error, response, loading,resp,err])

      const onDeliverOrder = (id) => {
        dispatch(deliverOrder(id))
      }
    

    
  return (
    <div>
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
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((order) => {
                  return (
                    <tr>
                      <td>
                        {order.firstName} {order.lastName}
                      </td>
                      <td>{order.mobile}</td>
                      <td>{order.address}</td>
                      <td>{order.totalPrice}</td>
                      <td>{order.orderDate}</td>
                      <td>{order.status}</td>
                      <td>
                        <button
                        
                          onClick={() => {
                            onDeliverOrder(order.id)
                          }}
                          class="btn btn-success mx-3"
                        >
                          Delivered
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

export default DeliveryBoyScreen
