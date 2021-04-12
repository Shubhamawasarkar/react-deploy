import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SigninScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, error, response } = userSignin

  const dispatch = useDispatch()
  const onSignin = () => {
    if(email.length==0){
      alert('enter email ')
  }else if(password.length==0){
      alert('enter password')
  }else{
    dispatch(signin(email, password))
  }
  }

  useEffect(() => {
    if (response && response.status === 'success') {
      sessionStorage.setItem('token', response.data.token)
      sessionStorage.setItem('role',response.data.role)
      sessionStorage.setItem('name',response.data.firstName)

      if(response.data.role === 'OWNER'){
        props.history.push('/admin')
        window.location.reload(false);
      }
      else if(response.data.role === 'ADMIN'){
        props.history.push('/admin')
        window.location.reload(false);
      }
      else if(response.data.role === 'DELIVERY'){
        props.history.push('/delivery')
        window.location.reload(false);
      }
      else{
        props.history.push('/')
        window.location.reload(false);
      }
     // {response.data.role === 'OWNER' &&  }
      // {response.data.role === 'ADMIN' &&  props.history.push('/admin')}
      //  {response.data.role === 'CUSTOMER'
      //    ? props.history.push('/')
      //    : props.history.push('/')}

     // props.history.push('/')
     // {(sessionStorage.getItem('role') == 'OWNER' ||  sessionStorage.getItem('role') == 'ADMIN') && window.location.reload(false); }
      //{sessionStorage.getItem('role') == 'CUSTOMER' && }
      
      
      
    } else if (response && response.status === 'error') {
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])

  return (
    <div class="container">
      <div class="row">
      <div class="col">
        <img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" className="img-fluid" alt="Unable to load image"/>
        
        </div>
        <div class="col">
        <h3>SIGN IN</h3>
          <div className="form">
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
              <button onClick={onSignin} className="btn btn-success">
                Singin
              </button>
              <div className="float-end">
                New User? <Link to="/signup">Signup here</Link>
              </div>
            </div>
          </div>
          {loading && <div>waiting for response</div>}
        </div>
      </div>
      
    </div>
  )
}

export default SigninScreen
