import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProductList } from '../actions/userActions'

const ProductsScreen = (props) => {
  const dispatch = useDispatch()
  const productList = useSelector((store) => store.productList)
  const { error, response, loading } = productList

  useEffect(() => {
    let subCategoryId = sessionStorage.getItem('subCategoryId')
    dispatch(getProductList(subCategoryId))
  }, [])
  useEffect(() => {}, [error, response, loading])

  const onSelectProduct = (id) =>{
    sessionStorage.setItem('productId',id)
    props.history.push('/addtocart')
    //  document.location.href = '/addtocart'

  }
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {response &&
          response.data &&
          response.data.length > 0 &&
          response.data.map((product) => {
            return (
              <div class="col">
                <div class="card" style={{ padding: 1 }}>
                  <img
                    src={`${process.env.REACT_APP_URL}/${product.image}`}
                    class="card-img-top"
                    alt="..."
                    style={{ height: 150 }}
                  />
                  <div class="card-body" style={{ padding: 5 }}>
                    <a>
                      <b> {product.name}</b>
                    </a>
                  </div>

                  <div class="card-body" style={{ padding: 5, color: 'red' }}>
                    <a>
                      <b> Rs. {product.price}</b>
                    </a>
                  </div>

                  <div class="card-body" style={{ padding: 5 }}>
                    <a>
                      <span class="drug-varients ellipsis">
                        <i>{product.company}</i>
                      </span>
                    </a>
                  </div>
                  <div class="card-body" style={{ padding: 5 }}>
                      <button 
                      onClick={() =>  onSelectProduct(product.id)}
                      type="button" class="btn btn-primary">
                        Buy Now
                      </button>
                
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ProductsScreen
