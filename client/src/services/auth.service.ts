import axios from "axios";

const API_URL:string = "/auth";

const signup:any = (fullName:string, email:string, password:string, rePassword:string) => {
    try {
      return axios
      .post("http://localhost:5000/auth/signup", {
        fullName,
        email,
        password,
        rePassword
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
    } catch (err) {
      if(err instanceof Error){
        console.log(err.message);
      } else{
        console.log('Unexpected error', err);
      }
    }
  };

const login:any = (email:string, password:string) => {
    try {
     return axios
     .post(API_URL + "/login", {
       email,
       password,
     })
     .then((response) => {
       if (response.data.accessToken) {
         localStorage.setItem("user", JSON.stringify(response.data));
       }
   
       return response.data;
     });
    } catch (err) {
      if(err instanceof Error){
        console.log(err.message);
      } else{
        console.log('Unexpected error', err);
      }
    }
};

const logout = () => {
    return JSON.parse(localStorage.getItem("user") || "");
};

const getCurrentUser= () => {
    return JSON.parse(localStorage.getItem("user") || "");
}

const authService = {
    signup, 
    login,
    logout,
    getCurrentUser,
};

export default authService;