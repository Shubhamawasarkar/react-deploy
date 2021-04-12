import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import '../css/dashboard.css'
const AdminSidebarNavigation = (props) => {
  // const toHomeComponent = () => {
  //   document.location.href = '/admin'
  // }
  // const toOrders = () => {
  //   document.location.href = '/admin/orders'
  // }
  // const toProducts = () => {
  //   document.location.href = '/admin/products'
  // }


  return (
   
    <div class="container-fluid">
    <div class="row col-md-3">
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
          <li class="nav-item">
             <Link to='/admin'>
             <a class="nav-link " href="#">
                <span className="navbar-brand">Dashboard</span>
                <span data-feather="home"></span> </a>
               </Link>
          </li>

          <li class="nav-item">
             <Link to='/admin/orders'>
             <a class="nav-link " href="#">
                <span className="navbar-brand">Orders</span>
                <span data-feather="file"></span> </a>
               </Link>
          </li>

          {sessionStorage.getItem('role') === 'OWNER' && 
           <li class="nav-item">
           <Link to='/owner/admin'>
           <a class="nav-link " href="#">
              <span className="navbar-brand">Add/Remove Admin</span>
              <span data-feather="file"></span> </a>
             </Link>
        </li>}
         
           
            {/* <li class="nav-item">
              <a class="nav-link" onClick={toOrders} href="#">
                <span data-feather="file"></span>
                Orders
              </a>
            </li> */}
            <li class="nav-item">
             <Link to='/admin/categories'>
             <a class="nav-link " href="#">
                <span className="navbar-brand">Categories</span>
                <span data-feather="shopping-cart"></span> </a>
               </Link>
          </li>
          <li class="nav-item">
             <Link to='/admin/sub-categories'>
             <a class="nav-link " href="#">
                <span className="navbar-brand">Sub Categories</span>
                <span data-feather="shopping-cart"></span> </a>
               </Link>
          </li>
            <li class="nav-item">
             <Link to='/admin/products'>
             <a class="nav-link " href="#">
                <span className="navbar-brand">Products</span>
                <span data-feather="shopping-cart"></span> </a>
               </Link>
          </li>
            {/* <li class="nav-item">
              <a class="nav-link" onClick={toProducts} href="#">
                <span data-feather="shopping-cart"></span>
                Products
              </a>
            </li> */}
               <li class="nav-item">
             <Link to='/admin/customers'>
             <a class="nav-link " href="#">
                <span className="navbar-brand">Customers</span>
                <span data-feather="shopping-cart"></span> </a>
               </Link>
          </li>
           
          </ul>

          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a
              class="link-secondary"
              href="#"
              aria-label="Add a new report"
            >
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Current month
              </a>
            </li>
          </ul>
        </div>
      </nav>

    
    </div>
    
  </div>
  )
}

export default AdminSidebarNavigation



