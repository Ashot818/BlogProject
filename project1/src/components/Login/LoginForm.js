import React from "react";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/features/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faLock , faRightToBracket} from "@fortawesome/free-solid-svg-icons";
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (

      <div className="login-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
            dispatch(userLogin({loginValue:e.target[0].value , passwordValue:e.target[1].value }));
            navigate("/");
        }}
      >
 
       <div style={{display:"flex",flexDirection:'column'}}>
       <div className="text-login">
        <span style={{fontSize:'40px'}}><FontAwesomeIcon icon={ faBlog}/>
        <p>Login</p>
        <p style={{fontSize:'10px'}}>Singn in to your account</p>
        </span>
        </div>
       <span><FontAwesomeIcon icon={faRightToBracket}/></span>
         <input value={'admin'} type="text" placeholder="Login" />
         <span><FontAwesomeIcon icon={faLock}/></span>
        <input value={'admin'} type="password" placeholder="Password"/></div>
        <button className="button-29" role="button">Sign In</button>
      </form>
    </div>
  
  );
}

export default LoginForm;
