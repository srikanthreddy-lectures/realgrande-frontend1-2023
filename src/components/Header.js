import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  let clickHandler = () => {
    console.log("login clicked"+localStorage.getItem('name'));
    if(localStorage.getItem('name')){
      // localStorage.removeItem('name');
      // localStorage.removeItem('email');
      localStorage.clear();
      navigate('/');
    }
    else{
      navigate('/login');
    }
  }

    return (
       <div className="row bg-warning">
            <div className="col-sm-2">
               <Link to="/"> <img className="img-thumbnail w-50" src='logo.png'  alt="logo here" /> </Link>
            </div>
            <div className="col-sm-7 mt-4">
                <h3> Making world a better place..Houses to Ghar's</h3>
            </div>
            <div className="col-sm-3 mt-3 pb-3">     
            { 
            (localStorage.getItem('name')) && 
            <h6> Hello { localStorage.getItem('name') }!</h6> }    
            <button type="button" onClick={clickHandler} className="btn btn-sm btn-primary">
            { 
            (localStorage.getItem('name')) ?  
             <span> Logout </span>            : 
              <span> Login  </span> }         
            </button>
            
            { 
            !localStorage.getItem('name') && 
            <>
               <button type="button" onClick={() => { navigate('/signup') }} className="btn btn-sm btn-secondary mx-2">
               <span> Sign Up  </span> 
               </button>
           </>
            }         
            

             </div>

       </div>
      
     );
}
 

export default Header;
