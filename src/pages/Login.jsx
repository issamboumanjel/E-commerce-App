import { useState } from "react"
import Title from "../components/title"

const Login = () => {

  const [currentState, setCurrent] = useState('Sing up');

  const onSubmithandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmithandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-4 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === 'Login' ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-800 " placeholder="Name" required/>}
      <input type="email" className="w-full px-3 py-2 border border-gray-800 " placeholder="Email" required/>
      <input type="password" className="w-full px-3 py-2 border border-gray-800 " placeholder="Password" required/>
      <div className="w-full flex justify-between text-sm mt-[-10px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {
          currentState === 'Login' ? 
          <p onClick={()=>setCurrent('Sing up')} className="cursor-pointer">Create an account</p> : 
          <p onClick={()=>setCurrent('Login')} className="cursor-pointer">Already have an account?</p>
        }
      </div>
      <button className="bg-black py-2 px-8 text-white font-light mt-4">{currentState === 'Login'? 'Sign In': 'Sign Up'}</button>
      
    </form>
  )
}

export default Login
