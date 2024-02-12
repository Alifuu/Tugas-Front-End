import logo from '../assets/dashboard/logo.svg'
import dashboard from '../assets/dashboard/Frame.svg'
import visual from '../assets/dashboard/fi_slack.svg'
import case1 from '../assets/dashboard/fi_archive.svg'
import data1 from '../assets/dashboard/fi_server.svg'
import data2 from '../assets/dashboard/fi_database.svg'
import wifi from '../assets/dashboard/fi_wifi.svg'
import figma from '../assets/dashboard/fi_figma.svg'
import image from '../assets/dashboard/fi_image.svg'
import user from '../assets/dashboard/fi_user.svg'
import pocket from '../assets/dashboard/fi_pocket.svg'
import workspace from '../assets/dashboard/Vector (2).svg'
import garis from '../assets/dashboard/Frame 6111.svg'
import bulan from '../assets/dashboard/u_moon.svg'
import user2 from '../assets/dashboard/user.svg'
import Home2 from '../assets/dashboard/Home.svg'
import Air from '../assets/dashboard/Air.png'
import penduduk from '../assets/dashboard/penduduk.png'
import penduduk2 from '../assets/dashboard/penduduk2.png'
import penduduk3 from '../assets/dashboard/penduduk3.png'
import penduduk4 from '../assets/dashboard/penduduk4.png'
import penduduk5 from '../assets/dashboard/penduduk5.png'
import penduduk6 from '../assets/dashboard/penduduk6.png'

function Dashboard() {

    return (
      <>
        <div class=" bg-[#F5F6FA] flex">
          

        <div class="container max-w-[240px] min-h-[1120px] bg-[#2A3042]">
        <img class=" p-5"src={logo}></img>
        <div class=" flex p-4">
        <img class=" px-2 " src={dashboard}></img> 
        <p class="text-[13px] text-white"> Dashboard </p>
        </div>

        <div class="text-[#6A7187] px-6 font-semibold">
        <p class=" px-6 font-bold" >DATA</p>
        <div class="flex p-4">
        <img class=" px-2 " src={visual}></img> 
        <p class="text-[13px]"> Visualization </p>
        </div>
        <div class="flex p-4">
        <img class=" px-2 " src={case1}></img> 
        <p class="text-[13px]"> Case </p>
        </div>
       
        <div class="flex p-4">
        <img class=" px-2 " src={data1}></img> 
        <p class="text-[13px]"> Data Set </p>
        </div>
        <div class="flex p-4">
        <img class=" px-2 " src={data2}></img> 
        <p class="text-[13px]"> Data Source </p>
        </div>
        <div class="flex p-4">
        <img class=" px-2 " src={wifi}></img> 
        <p class="text-[13px]"> Connection </p>
        </div>
        </div>

        <div class="text-[#6A7187] px-6 font-semibold">
        <p class=" px-6 font-bold" >ASSETS</p>
        <div class="flex p-4">
        <img class=" px-2 " src={figma}></img> 
        <p class="text-[13px]"> Icon </p>
        </div>
        <div class="flex p-4">
        <img class=" px-2 " src={image}></img> 
        <p class="text-[13px]"> Image </p>
        </div>
      </div>

      <div class="text-[#6A7187] px-6 font-semibold">
        <p class=" px-6 font-bold" >ASSETS</p>
        <div class="flex p-4">
        <img class=" px-2 " src={user}></img> 
        <p class="text-[13px]"> Account </p>
        </div>
        <div class="flex p-4">
        <img class=" px-2 " src={pocket}></img> 
        <p class="text-[13px]"> Role </p>
        </div>
        <div class="flex p-4">
        <img class=" px-2 " src={workspace}></img> 
        <p class="text-[13px]"> Workspace </p>
        </div>
        </div>
      </div>
      
<div class="container max-w-[1200px] min-h-[1220px] bg-[#F5F6FA]">
<div class=" container max-w-[1200px] min-h-[64px] bg-white flex justify-between"> 
<div>
<img class=" flex"src={garis}></img>
        </div>
<div class="flex">
    <div class="p-3">
    <img src={bulan}></img>
     </div>
     <div>
    <img src={user2}></img>
    </div>
    <div>
    <div class=" container max-w-[200px] min-h-[44px] rounded-t-lg">
        
    </div>
    <div class=" container max-w-[200px] min-h-[44px] rounded-b-lg"></div>
    </div>
    <p class="font-semibold p-3">User.Inc</p>
</div>
    </div>
    <div class=" flex p-5 mt-5">
        <img class="px-3" src={Home2}></img>
        <p class="px-3"> &gt; </p> <span class="px-3"> Statistik </span><span class="px-3"> &gt; </span> <span> wilayah </span>
    </div>

    <div class="flex">
            <img src={penduduk}></img>
            <img src={Air}></img>
    </div>
    <div className=" flex p-5">
        <div class="container max-w-[362px] min-h-[310px] bg-white rounded-md">
            <p class="p-3">Jumlah Penduduk Tiap Dusun</p>
            <img class="p-6" src={penduduk2}></img>         
        </div>
        <div class="container max-w-[362px] min-h-[310px] bg-white rounded-md ml-6">
            <p class="p-3">Jumlah Penduduk Tiap Dusun</p>
            <img class="p-6" src={penduduk3}></img>    
                 
        </div>
        <div class="container max-w-[362px] min-h-[310px] ml-6 bg-white rounded-md">
            <p class="p-3">Jumlah KK Tiap Dusun</p>
            <img class="p-6" src={penduduk2}></img>         
        </div>
    </div>
    <div class="flex">
    <div class="container max-w-[362px] min-h-[310px] ml-6 bg-white rounded-md">
            <p class="p-3">Jumlah Prasarana Umum</p>
            <img class="p-6" src={penduduk5}></img>         
        </div>
        <img class="mb-10" src={penduduk6}></img>
    </div> 
    </div>  
    </div>
       
      </>
    )
  }
  
  export default Dashboard
  