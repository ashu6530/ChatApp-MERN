import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const LoginForm = () => {  
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading,setLoading] =useState(false)
    const navigate = useNavigate()


    const toggleShow = (e)=>{
      e.preventDefault()
        setShow(!show)
    }

    const submitHandler = async (e) => {
      e.preventDefault();
      setLoading(true);
    
      if (!email || !password) {
        toast.error("Please fill all the fields", {
          duration: 5000,
          position: "top-center"
        });
        setLoading(false);
        return;
      }
    
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        };
    
        const { data } = await axios.post('http://localhost:3000/api/user/login', { email, password }, config);
    
        toast.success("Login Successful", {
          duration: 5000,
          position: "top-center"
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
        setLoading(false);
        navigate('/chats');
      } catch (error) {
        toast.error("Error Occurred", {
          duration: 5000,
          position: "top-center",
          description: error.response?.data?.message || "Something went wrong"
        });
        setLoading(false);
      }
    };
    
    
    return  (
    <div>
      <h2 className="text-3xl text-white font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 rounded bg-gray-800 text-white" type="email" id="email"
           onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-white mb-2" htmlFor="password">Password</label>
          <input className="w-full p-2 rounded bg-gray-800 text-white" type={show ? "text " : "password"} id="password" 
           onChange={(e)=>setPassword(e.target.value)}/>
          <button 
          onClick={toggleShow}
          className="absolute right-0 px-4 py-2 text-white bg-blue-600 rounded-r">{show ? 'Hide' : "Show"}
        </button>
        </div>
        <button className="w-full py-2 mt-4 bg-blue-600 text-white rounded"
          onClick={submitHandler}
        >Login 👋 </button>
      </form>
    </div>
  );
}

  export default LoginForm