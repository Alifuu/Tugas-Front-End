import logo from '../assets/Frame 26.svg'
import facebook from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'
import Twitter from '../assets/Twitter.svg'
function Footer() {


    return (
      <>


      <div class=" container max-w-[1140px] min-h-[233px] bg-[#2161D5] mx-auto rounded-lg mt-10 mb-10 ">
        <div class="flex justify-between">

        <div class="  p-10">
          <p class="max-w-[370px] min-h-[80px] text-[35px] text-white font-semibold">Subscribe Now for Get Special Features!</p>
          <p class="text-[16px] text-white">Let's subscribe with us and find the fun.</p>
        </div>
        <div class="p-20 ">
          <button class=" px-10 py-3 max-w-[250px] min-h-[60px] text-[#2161D5] bg-white text-[16px] rounded-xl text-center"> Subscribe Now</button>
        </div>
        </div >
      </div>
      <div class=" min-h-[411px] bg-[#F8F8F8]">

        <div class="flex justify-between mx-auto py-[70px] max-w-[1140px] min-h-[280px] ">
            <div>
                <img src={logo}></img>
                <p class="max-w-[340px] min-h-[62px] mt-5"> Geolabs is a private virtual network that has unique features and has high security.</p>
                <div class="flex mt-5">  
                         <img src={facebook}></img>
                        <img src={instagram}></img>
                        <img src={Twitter}></img>
                </div>
                <div class="mt-10">
                <span class="text-[#AFB5C0] "> @2020</span><span class=" font-semibold text-[#AFB5C0]">EBDESK</span>
                </div>
            </div>
           <div >
                <p class=" text-[#0B132A] font-semibold text-[18px]">Product</p>     
                <p class="py-2 text-[#4F5665]" >Download </p>  
                <p class="py-2 text-[#4F5665]">Pricing</p>  
                <p class="py-2 text-[#4F5665]">Locations</p>  
                <p class="py-2 text-[#4F5665]">Server</p>  
                <p class="py-2 text-[#4F5665]">Countries</p>  
                <p class="py-2 text-[#4F5665]">Blog</p>       
            </div> 
            <div>
                <p class=" text-[#0B132A] font-semibold text-[18px]">Engage</p>     
                <p class="py-2 text-[#4F5665]">Geolabs ?  </p>  
                <p class="py-2 text-[#4F5665]">FAQ</p>  
                <p class="py-2 text-[#4F5665]">Tutorials</p>  
                <p class="py-2 text-[#4F5665]">About Us</p>  
                <p class="py-2 text-[#4F5665]">Privacy Policy</p>  
                <p class="py-2 text-[#4F5665]">Terms of Service</p>       
            </div> 
            <div>
                <p class=" text-[#0B132A] font-semibold text-[18px]">Earn Money</p>     
                <p class="py-2 text-[#4F5665]">Affiliate </p>  
                <p class="py-2 text-[#4F5665]">Become Partner</p>  
                   
            </div> 
        </div>
      </div>
      </>
    )
  }
  
  export default Footer