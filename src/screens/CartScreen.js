import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCartList, deleteCartItem, makeOrder } from '../actions/userActions'

const CartScreen = (props) => {
  const dispatch = useDispatch()
  const cartList = useSelector((store) => store.cartList)
  const { error, response, loading } = cartList

  const cartItemRemove = useSelector((store) => store.cartItemRemove)
  const { err, resp, load } = cartItemRemove

  const order = useSelector((store) => store.order)
  const { er, res, lo } = order

  useEffect(() => {
    dispatch(getCartList())
  }, [])
  useEffect(() => {
    if (resp && resp.status === 'success') {
      document.location.href = '/cart'
    } else if (err) {
      console.log(err)
      alert('error while making API call')
    }else if(res && res.status == 'success'){
      document.location.href = '/'
      alert("Your order has been placed !");
    }else if(er){
      console.log(err)
      alert('error while making API call')
    }
  }, [error, response, loading,resp,err,res,er])

  const onDeleteCartItem = (id) => {
    dispatch(deleteCartItem(id))
  }
  const onOrder = () => {

    dispatch(makeOrder())
  }

  var total=0;



  return (
    <div class="container-fluid">
      <div class="row">
        <aside class="col-lg-9">
      <div class="card">
      <div class= "table responsive">
              <table class="table align-middle table-borderless " style={{fontFamily: 'Times New Roman', padding : '20px',fontSize:'22px'}} >
                <thead class= "align-middle">
                  <tr class=" text-uppercase ">
                    
                    <th scope="col" height="50">Product</th>
                    <th scope="col">Company</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">SubTotal</th>
                  </tr>
                </thead>
                {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((product) => {
                  return (
              
                <tbody>
                  <th height="125">{product.name}</th>
                  <td>{product.company}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{ product.quantity * product.price}</td>
                 
                  <td> <span class="button"  style={{background:'Red'}} class="btn -btn-danger"onClick={() => onDeleteCartItem(product.cartId)}>Remove</span></td>
                  <p hidden>{total += parseInt(product.quantity) * parseFloat(product.price)}</p>
                </tbody>
                   
                 )
                })}
             </table>
            </div>
        </div>
      </aside>
      <aside class="col-lg-3">
        <div class="card" height= "100">
          <div class="card-body">
            <dl class="dlist=align text-uppercase pb-2 pt-2"> 
                
              <dt font-size="200%">Total Price:</dt>
              <dd>
                  <h3>{total}</h3>
              </dd>
            </dl>
            
            
          </div>
          <a class="btn btn-out btn-primary btn-lg "
          onClick={() => {
            onOrder()
          }}
          data-abc="true"> Order Now </a>
        </div>

      </aside>
      </div>
    </div>
  )
}

export default CartScreen
