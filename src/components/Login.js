import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();

    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');

    let submitHandler = (e) =>{
        e.preventDefault();
        console.log("submitted form");

        //need to talk to back end to check if a user exists
    const handleLogin = async () => {
        try {
            console.log(email,password);
            const response = await axios.post('http://localhost:3002/login',{ email, password });
            console.log(response);
            let data = response.data;
            console.log(data);
            if(data.email) { 
            localStorage.setItem('name',data.fname);
            localStorage.setItem('email',data.email);
            console.log("from session "+localStorage.getItem('name'));
            console.log(localStorage.getItem('name'));           
            localStorage.setItem('loginfailed',false);
            //check if it is realtor or customer and navigate appropriately
            (data.role == 'realtor') ? navigate('/inquiries') : navigate('/');
            }
            else {
              localStorage.clear();         
              localStorage.setItem('loginfailed',true);
              navigate('/login');
            }
        } 
        catch (error) {
            console.error('Login failed:', error);   
            localStorage.clear();         
            localStorage.setItem('loginfailed',true);
        }
        };
    handleLogin();
    }
    return (  
      <div> 
    <div class="mt-3"><h3> Login </h3> <br/></div>

        <div className="container-fluid bg-success d-flex justify-content-center align-items-start vh-100 w-50">
      
       
      <form onSubmit={submitHandler}>
      { localStorage.getItem('loginfailed') && 
       <h3 className='text-danger'> Invalid Login Credentials. Please try again.</h3>}
      
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e) => setEmail(e.target.value) } class="form-control" id="logineMail" name="logineMail" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="loginPassword" name="loginPassword"/>
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <div class="mb-3 form-check">
    <Link to="#">  Forgot Password </Link>
    </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        
        </div>
</div>
    );
}
 
export default Login;