import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProduct, addToCart } from "../actions/userActions";

const AddToCartScreen = (props) => {
  const [quantity, setquantity] = useState("");

  const addtocart = useSelector((store) => store.addtocart);
  const { load, resp, err } = addtocart;

  const dispatch = useDispatch();
  const prod = useSelector((store) => store.product);
  const { error, response, loading } = prod;

  useEffect(() => {
    let productId = sessionStorage.getItem("productId");
    dispatch(getProduct(productId));
  }, []);
  useEffect(() => {
    if (resp && resp.status === "success") {
      // props.history.push('/products')
      document.location.href = "/products";
    } else if (err) {
      console.log(err);
      alert("error while making API call");
    }
  }, [error, response, loading, resp, err]);

  const onAddToCart = () => {

    if(quantity.length==0){
      alert('enter quantity in number')
    }
      else{
    const product = sessionStorage.getItem("productId");
    const token = sessionStorage.getItem("token");
    dispatch(addToCart(token, product, quantity));
      }
  };

  return (
    <div class="container-fluid">
      <div>
        {response &&
          response.data &&
          response.data.length > 0 &&
          response.data.map((product) => {
            return (
              <div class="row">
                <div class="col-md-6">
                <img
                    src={`${process.env.REACT_APP_URL}/${product.image}`}
                    
                    alt="..."
                    style={{ marginLeft:100,cursor:"zoom-in",width:300,height:300}}
                  />
                </div>
              <div class="col-md-6">
                <h1 style={{fontSize : 20}}>{product.name}</h1>
                 <hr/>
                <p style={{color:"#6f7284"}}>{product.description}</p>
                <p style={{color:"#6f7284"}}>*Mfr:{product.company}</p>
                <hr/>
                
                <input
                  className="form-control text-center" required
                  style={{width:150,display:"inline-block"}}
                  placeholder=" Enter Quantity"
                  onChange={(e) => {
                    setquantity(e.target.value);
                  }}
                ></input>

                <span style={{fontSize:20,marginLeft: 50}}>Price:<span > ₹ {product.price}</span>
</span>
                <hr/>
                
                
                {sessionStorage.getItem("token") == null && (
                  <button
                    class="btn btn-primary disabled" 
                    style={{marginTop: 10}}
                    onClick={() => {
                      onAddToCart();
                    }}
                  >
                   PLEASE LOGIN TO BUY
                  </button>
                )}
                
                {sessionStorage.getItem("token") && (
                  <button
                    class="btn btn-primary "
                    style={{marginTop: 10}}
                    onClick={() => {
                      onAddToCart();
                    }}
                  >
                    ADD TO CART
                  </button>
                )}
              </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AddToCartScreen;
