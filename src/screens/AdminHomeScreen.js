import AdminSidebarNavigation from "../components/AdminSidebarNavigation"

const AdminHomeScreen = (props) => {
 
  
  return (
   <div className="row">
     <div class="col-md-2">
      <AdminSidebarNavigation/>
      </div>
      <div class="col-md-10 text-center container">
          <h1 className="mt-5">Welcome Back !</h1>
      </div>
   </div>
  )
}

export default AdminHomeScreen
