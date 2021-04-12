import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcategories, getCategory } from '../actions/userActions'
import { logout } from '../actions/userActions'
import { Link, NavLink, useHistory } from 'react-router-dom'
import '../css/user-navigation.css'

const Navigation = (props, context) => {
  let history = useHistory()
  const dispatch = useDispatch()
  const categories = useSelector((store) => store.categories)
  const { error, response, loading } = categories

  // const [Subcategory, setSubCategory] = useState('')

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getcategories())
  }, [])

  useEffect(() => {

  }, [error, response, loading])

  const onLogout = () => {
    dispatch(logout())
  }

  const onSelectCategory = (categoryId) => {
    sessionStorage.setItem('categoryId', categoryId)
     history.push('/sub-category')
    //  document.location.href = '/sub-category'
  }
  // const onSelectCategory = (categoryId) =>{
  //   history.push({
  //     pathname: '/sub-category',
  //     state: { id: categoryId }
  //   })
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header1">
        <div className="container-fluid">
          <Link className="px-5" to="/">
            <img className="navbar-brand img-fluid" src="https://cdn4.iconfinder.com/data/icons/medical-and-healthcare-2/64/1-41-512.png"
            width="80" height="80"
            />
            {/* <span className="navbar-brand">LOGO</span> */}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <div className="d-flex ms-auto header1flex">
              <ul className="navbar-nav  mb-2 mb-lg-0 me-auto">
                <li className="nav-item">
                  <Link to="/cart">
                    <span className="nav-link header1link">Cart</span>
                  </Link>
                </li>
                {sessionStorage.getItem('name') && (
                  <li class="nav-item dropdown-left">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-secondary dropdown-toggle header1link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {sessionStorage.getItem('name')}
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                        <li>
                          <Link to="/user/order-history">
                          <button
                           class="dropdown-item" type="button">
                            Order History
                          </button>
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={onLogout}
                            class="dropdown-item"
                            type="button"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
                {sessionStorage.getItem('name') == null && (
                  <li mr-5>
                    <Link to="/signin">
                      <span className="nav-link header1link">Signin</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <nav
        class="navbar navbar-expand-lg navbar-light bg-light rounded header2"
        aria-label="Twelfth navbar example"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample10"
          >
            <ul class="navbar-nav">
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((categories) => {
                  return (
                    <li class="nav-item">
                      <a class="nav-link active"
                        onClick={() =>  onSelectCategory(categories.id)}
                     aria-current="page" href="">
                       {categories.name}
                    </a>
                    </li>

                    //     <a class="nav-link active"
                    //     onClick={() =>  onSelectCategory(categories.id)

                    //    }
                    //  aria-current="page" href="#">
                    //    {categories.name}
                    //  </a>
                  )
                })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
