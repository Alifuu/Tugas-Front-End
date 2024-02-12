import { Navigate, useNavigate } from 'react-router-dom'
import gambar from '../assets/gambar-login.png'
import logo from '../assets/Logo.svg'
const Login = () => {

  const navigate = useNavigate()
  
  return (
    <div>
        <div class="container w-full max-w-[auto] min-h-[auto] flex-col"> 
            <div class="grid grid-cols-8 ">
            <div class=" col-span-8 lg:col-span-3 bg-[#F5F6FA]"> 
            <div class=" mt-[30px] ml-[40px]"> <img src={logo}></img></div>
            <div class="mt-[200px] " > 
            <img src={gambar}></img></div>

            <div class="text-center max-w-[424px] min-h-[30px] mt-[75px] ml-[45px]" >
            <p class="text-[27px] text-bold max-w-[500px] font-Rubik">
            Services
            </p>
            <p class="text-[16px] max-w-[400px] font-Rubik">An expert team help you to analyze your polticalt power.An expert team</p>
            </div>
            </div>
            <div class=" col-span-8 lg:col-span-2"> </div>
            <div class=" col-span-8 lg:col-span-3">
              <div class="mt-[300px] ml-[30px] max-w-[px]">
                <p class="text-[29px] max-w-[700px] font-Rubik">Welcome to Logo ipsum</p>
                <div class="flex mb-[50px]">
                <p> Don't have an account? </p>
                <p class=" text-blue-600 font-Rubik"> sign Up </p>
                </div>
                <p class="font-Rubik"> username</p>
                <input type="text" class="border-2 mb-[20px] px-[70px]" ></input>
                <p class="font-Rubik">Password</p>
                <input type="password" class="border-2 rounded-sm border-slate-950 px-[70px]" ></input>
                <div class="flex mt-5">
                <input type="checkbox"></input>
                <p class="px-2"> remember me</p>
                </div>
              
                <button onClick={()=> navigate('/home')} class=" bold px-[140px] bg-blue-800 text-white mt-[20px]" > Log In</button>
              </div>
               </div>
  </div>

  <div class="flex">
  </div>

        </div>
    </div>
  )
}

export default Login