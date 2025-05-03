import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const [credentials, setCredentials] = useState({name :"", email :"" , password :"" , cpassword :""})
    let navigate  = useNavigate();
  
    const handleSubmit = async(e)=>{
      e.preventDefault();
        // Api calling
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
         method: 'POST',
         headers: {
           'Content-type': 'application/json'
         },
         body: JSON.stringify({name :credentials.name,  email :credentials.email , password :credentials.password}) 
       });
       const json = await response.json()
       console.log(json)
       if(json.success){
        props.showAlert("Account Created SuccessFully","success")
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
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black/60 to-black/10 px-4">
          <div className="w-full max-w-md flex justify-center items-center mt-8 md:mt-12 ">
        <img
          src="../signup.png"
          alt="Welcome"
          className="h-[460px] w-full object-cover rounded-2xl "
        />
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">Create Your Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={credentials.name}
              onChange={handleChange}
              className="w-full border border-orange-400 text-orange-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your name"
              required
              minLength={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name='email'
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
              type="password"
              name='password'
              value={credentials.password}
              onChange={handleChange}
              autoComplete="new-password"
              className="w-full border border-orange-400 text-orange-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your password"
              required
              minLength={8}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name='cpassword'
              value={credentials.cpassword}
              onChange={handleChange}
              autoComplete="new-password"
              className="w-full border border-orange-400 text-orange-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your password"
              required
              minLength={8}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-400 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>

      {/* Image Section */}


    </div>
  );
};

export default Signup;
