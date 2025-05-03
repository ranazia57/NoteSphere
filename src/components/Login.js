import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {

  const [credentials, setCredentials] = useState({email :"" , password :""})
  let navigate  = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
      // Api calling
      const response = await fetch('http://localhost:5000/api/auth/login', {
       method: 'POST',
       headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify({email :credentials.email , password :credentials.password}) 
     });
     const json = await response.json()
     console.log(json)
     if(json.success){
      props.showAlert("login SuccessFully","success")
      // Save the authtoken and redurect
      localStorage.setItem('token' , json.authtoken)
      navigate('/')
     }
     else{
      props.showAlert("Invelid credentials","error")
     }
  }


  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black/60 to-black/10 px-4">
    <div>
        <img src="../login.png" alt="" />
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-14 ml-5 w-full max-w-md hover:scale-105 transition duration-300">
        <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">Login to Your Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
            name='email'
              type="email"
              value={credentials.email}
              onChange={handleChange}
              autoComplete="username"
              className="w-full border border-orange-400 text-orange-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
            name='password'
              type="password"
              value={credentials.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="w-full border border-orange-400 text-orange-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-orange-400 hover:underline font-semibold">
            Signup
          </Link>
        </p>
      </div>
      
    </div>
  );
};

export default Login;
