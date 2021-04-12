import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminSidebarNavigation from '../components/AdminSidebarNavigation'

import { addAdmin } from '../actions/adminActions'

const EditProductScreen = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const dispatch = useDispatch()
 
    const admin = useSelector((store) => store.admin)
    const { loading, response, error } = admin


 useEffect(() => {

    if (response && response.status === 'success') {
      props.history.push('/owner/admin')
    } else if (error) {
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onAddAdmin = () => {
    dispatch(addAdmin(firstName, lastName, email, password, address, mobile))
  }
    

  return (
    <div className="row">
      <div class="col-md-2">
        <AdminSidebarNavigation />
      </div>
      <div class="col-md-10 text-center align-center w-50 container">
          <h2 className="my-5">Enter Admin details</h2>
          <div className="form">
          <div className="mb-3">
            <input
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              
              placeholder="First Name"
              className="form-control text-center"
              required
            ></input>
          </div>


           <div className="mb-3">

            <input
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              placeholder="Last Name"
              className="form-control text-center" require
            ></input>
          </div>


          <div className="mb-3">
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email"
              className="form-control text-center"
              placeholder="Email"
            />
          </div>
        
          <div className="mb-3">
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
              className="form-control text-center"
              placeholder="password"
            ></input>
          </div>


         <div className="mb-3">
            <input
              onChange={(e) => {
                setconfirmPassword(e.target.value)
              }}
              type="password"
              className="form-control text-center"
              placeholder="Confirm Password"
            ></input>
          </div>

          <div className="mb-3">
            <input
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              placeholder="Address"
              className="form-control text-center"
            ></input>
          </div>

          <div className="mb-3">
            <input
              onChange={(e) => {
                setMobile(e.target.value)
              }}
              className="form-control text-center"
              placeholder="Mobile "
            ></input>
          </div>

          <div className="mb-3">
            <button onClick={ () => {onAddAdmin() }} className="btn btn-success">
                Add Admin
        </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProductScreen
