import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import AuthService from "../../services/auth.service";
import { useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import './Auth.scss';

function Login() {
  const message = "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginErr] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e:any) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/details");
          window.location.reload();
        },
        (error:any) => {
          setLoginErr("Invalid Credentials");
        }
      );
    } catch (err) {
      if(err instanceof Error){
        console.log(err.message);
      }else{
          console.log("Unexpected Error", err);
      }
    }
  };
  return(

    <MDBContainer fluid className="p-3 my-5 h-custom">

      <form onSubmit={handleLogin}>

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6' style={{paddingTop: "8%"}}>

          <MDBInput 
          className="inputField"
          value={email} 
          wrapperClass='mb-4' 
          placeholder='Email address' 
          id='formControlLg' 
          type='email'
          size="lg"
          onChange = {(e:any) => setEmail(e.target.value)}
          />
          <MDBInput 
          className="inputField"
          value = {password}
          wrapperClass='mb-4' 
          placeholder='Password' 
          id='formControlLg' 
          type='password' 
          size="lg"
          onChange = {(e:any) => setPassword(e.target.value)}
          />
          <p className="link-danger small fw-bold pt-1 ">{loginError}</p>



          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn size='lg'>
                <button type="submit">
                    Login
                </button>
            </MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/signup">Register</Link></p>
          </div>

        </MDBCol>

      </MDBRow>
      </form>

    </MDBContainer>
  );
}

export default Login;