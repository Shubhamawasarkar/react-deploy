import './App.css'

//import './css/dashboard.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import AdminNavigation from './components/AdminNavigation'
import DeliveryBoyNavigation from './components/DeliveryBoyNavigation'
// import OwnerNavigation from './components/OwnerNavigation'
import HomeScreen from './screens/HomeScreen'
import AdminHomeScreen from './screens/AdminHomeScreen'
import AdminOrderScreen from './screens/AdminOrderScreen'
import OwnerHomeScreen from './screens/OwnerHomeScreen'
import AdminProductScreen from './screens/AdminProductScreen'
import AddProductScreen from './screens/AddProductScreen'
import EditProductScreen from './screens/EditProductScreen'
import AdminCategoriesScreen from './screens/AdminCategoriesSreen'
import AdminAddCategoryScreen from './screens/AdminAddCategoryScreen'
import EditCategoryScreen from './screens/EditCategoryScreen'
import SubCategoryScreen from './screens/SubCategoryScreen'
import ProductsScreen from './screens/ProductsScreen'
import AdminSubCategoriesScreen from './screens/AdminSubCategoriesScreen'
import EditSubCategoryScreen from './screens/AdminEditSubCategoryScreen'
import AdminAddSubCategoryScreen from './screens/AdminAddSubCategoryScreen'
import AdminCustomersScreen from './screens/AdminCustomersScreen'
import Footer from './components/Footer'
import AddToCartScreen from './screens/AddToCartScreen'
import CartSCreen from './screens/CartScreen'
import OwnerAddAdminScreen from './screens/OwnerAddAdminScreen'
import OwnerAddAdmin from './screens/OwnerAddAdmin'
import AdminOrderDetails from './screens/AdminOrderDetails'
import DeliveryBoyScreen from './screens/DliveryBoyScreen'
import UserOrderHistory from './screens/UserOrderHistory'
import UserOrderDetails from './screens/UserOrderDetails'

function App() {
  return (
    <div>
      <Router>
        {/* {sessionStorage.getItem('role') == 'OWNER' && <OwnerNavigation  />}
      {sessionStorage.getItem('role') == 'ADMIN' && <AdminNavigation  />} */}
        {sessionStorage.getItem('role') === 'CUSTOMER' && <Navigation />}
        {sessionStorage.getItem('role') === null && <Navigation />}
        {sessionStorage.getItem('role') === 'ADMIN' && <AdminNavigation />}
        {sessionStorage.getItem('role') === 'OWNER' && <AdminNavigation />}
        {sessionStorage.getItem('role') === 'DELIVERY' && <DeliveryBoyNavigation />}
        {/* {sessionStorage.getItem('role') == 'CUSTOMER'
        ? <Navigation  />
        : <Navigation  />
      } */}

        <div>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/signup" component={SignupScreen} />
            <Route exact path="/admin" component={AdminHomeScreen} />
            <Route exact path="/admin/orders" component={AdminOrderScreen} />
            <Route path="/admin/products" component={AdminProductScreen} />
            {/* <Route path="/owner" component={OwnerHomeScreen} /> */}
            <Route path="/add-product" component={AddProductScreen} />
            <Route path="/edit-product" component={EditProductScreen} />
            <Route path="/admin/categories" component={AdminCategoriesScreen} />
            <Route
              path="/admin/add-category"
              component={AdminAddCategoryScreen}
            />
            <Route path="/admin/edit-category" component={EditCategoryScreen} />
            <Route path="/sub-category" component={SubCategoryScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route
              path="/admin/sub-categories"
              component={AdminSubCategoriesScreen}
            />
            <Route
              path="/admin/edit-subcategory"
              component={EditSubCategoryScreen}
            />
            <Route
              path="/admin/add-subcategory"
              component={AdminAddSubCategoryScreen}
            />
            <Route path="/admin/customers" component={AdminCustomersScreen} />

            <Route exact path="/addtocart" component={AddToCartScreen} />
            <Route exact path="/cart" component={CartSCreen} />
            <Route path="/owner/admin" component={OwnerAddAdminScreen} />
            <Route path="/owner/add-admin" component={OwnerAddAdmin} />
            <Route path="/admin/order-details" component={AdminOrderDetails} />
            <Route path="/delivery" component={DeliveryBoyScreen} />
            <Route path="/user/order-history" component={UserOrderHistory} />
            <Route path="/user/order-details" component={UserOrderDetails} />
            
            
            
            
            
            
            
          </Switch>
        </div>
        {sessionStorage.getItem('role') === 'CUSTOMER' && <Footer />}
        {sessionStorage.getItem('role') === null && <Footer />}
      </Router>
    </div>
  )
}

export default App
