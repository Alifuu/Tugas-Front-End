import logo from '../assets/Logo.svg'

const NavBar = () => {


  return (
    <div class="flex justify-between mx-[60px] mt-[55px]"> 
      <div class=" gap-40"> <img src={logo}></img></div>
      
    <div class=" flex-col  font-Rubik text-sm  ">
      <a href="#" class="p-5"> Home </a>
      <a href="/no" class="p-5"> Product</a>
      <a href="/no" class="p-5"> Blog</a>
      <a href="/no" class="p-5"> Pricing</a>
      <a href="/no" class="p-5"> Contact </a>
      <a href="/about" class="p-5"> About Us</a>
    </div>
    <div class="  font-Rubik">
      <span class="p-5"> Sign In</span>
      <button class="bg-white p-3 rounded-3xl border-2 border-blue-600"> Sign Up</button>
    </div>
    </div>
  )
}

export default NavBar