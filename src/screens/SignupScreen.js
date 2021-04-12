import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SignupScreen = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')
  const dispatch = useDispatch()

  const userSignup = useSelector((store) => store.userSignup)
  const { loading, response, error } = userSignup

  // listen on change of the [loading, response, error] values
  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response && response.status === 'success') {
      // user successfully got registered
      props.history.push('/signin')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onSignup = () => {
    // console.log('first name: ', firstName)
    // console.log('last name: ', lastName)
    // console.log('email: ', email)
    // console.log('password: ', password)
    if(firstName.length==0){
      alert('enter first name')
  }else if(lastName.length==0){
      alert('enter last name')
  }else if(email.length==0){
      alert('enter email')
  }else if(password.length==0){
      alert('enter password')
  }else if(confirmPassword.length==0){
      alert('enter confirm password')
  }else if(password!=confirmPassword){
      alert('password does not match')
  }else

  {
    dispatch(signup(firstName, lastName, email, password, address, mobile))
  }
    
    
  }

  return (
    <div class="container">
      <div class="row">
      <div class="col">
        <img
          src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
          className="img-fluid"
          alt="Unable to load image"
        />
      </div>
      <div class="col">
        <h3>SIGN UP</h3>
        <div className="form">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              className="form-control"
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              className="form-control" require
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email"
              className="form-control"
              placeholder="test@test.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
              className="form-control"
              placeholder="*****"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              onChange={(e) => {
                setconfirmPassword(e.target.value)
              }}
              type="password"
              className="form-control"
              placeholder="*****"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              onChange={(e) => {
                setMobile(e.target.value)
              }}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <button onClick={onSignup} className="btn btn-success">
              Singup
            </button>
            <div className="float-end">
              Existing user? <Link to="/signin">Signin here</Link>
            </div>
          </div>
        </div>
        {userSignup.loading && <div>waiting for result</div>}
      </div>
    </div>
    </div>
    
  )
}

export default SignupScreen
