import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "../button";
import { Loader2 } from "lucide-react"

const SignupForm = () => {
    const[name,setName] =useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [cpassword, setCpassword] = useState()
    const [pic, setPic] = useState()
    const [show, setShow] = useState(false)
    const [loading,setLoading] =useState(false)
    
    const toggleShow = (e)=>{
        e.preventDefault()
        setShow(!show)
    }
    const postDetails=(pics)=>{
        setLoading(true)
        if(pics === undefined){
          toast("Please select an Image",{
            duration:5000,
            position:"top-center"

          })
          return 
        }
        if(pics.type === "image/jpeg " || pics.type === 'image/png' || pics.type==='image/jpg' ) {
          const data  = new FormData()
          data.append("file",pics)
          data.append("upload_preset","chat-App")
          data.append("cloud_name","drr8dcfon")
          fetch("https://api.cloudinary.com/v1_1/drr8dcfon/image/upload",{
            method:'post',
            body:data,
          }).then((res)=>res.json())
           .then((data)=>{
            setPic(data.url.toString());
            setLoading(false)
           }).catch((error)=>{
            console.log(error);
            setLoading(false)
           });
          

        }else{
            toast("Please choose jpeg or png",{
              duration:5000,
              position:"top-center"
  
            })
            setLoading(false)
        }
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        
    }
    return(
    <div>
      <h2 className="text-3xl text-white font-bold mb-4">Signup</h2>
      <form>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 rounded bg-gray-800 text-white" type="text" id="name" 
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 rounded bg-gray-800 text-white" type="email" id="email" 
           onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="password">Password</label>
          <input className="w-full p-2 rounded bg-gray-800 text-white" type="password" id="password" 
           onChange={(e)=>setPassword(e.target.value)}/>
          <button>{show ? 'Hide' : "Show"}</button>
        </div>
        <div className="mb-4 relative">
          <label className="block text-white mb-2" htmlFor="password">Confirm Password</label>
          <input className="w-full p-2 rounded bg-gray-800 text-white" type={show ? "text" : "password"} id="cpassword" 
           onChange={(e)=>setCpassword(e.target.value)}
          />
          <button 
          onClick={toggleShow}
          className="absolute right-0 px-4 py-2 text-white bg-blue-600 rounded-r">{show ? 'Hide' : "Show"}
        </button>
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="password">Upload Picture  </label>
          <input className="w-full p-2 rounded bg-gray-800 text-white" type="file" accept="images/*" id="file" 
           onChange={(e)=>postDetails(e.target.files[0])}
          />
        </div>
        <Button 
        className="w-full py-2 mt-4 bg-blue-600 text-white rounded"
        onClick={submitHandler}
        >Signup 👋 </Button>
      </form>
    </div>
  );
}
  export default SignupForm