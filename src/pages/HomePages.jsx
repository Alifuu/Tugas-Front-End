import gambarhome from '../assets/Home/gambarhome1.png'
import data from '../assets/Home/data.svg'
import chip from '../assets/Home/chip.svg'
import services from '../assets/Home/services.svg'
import element from '../assets/Home/element.svg'
import element2 from '../assets/Home/element2.svg'
import rafiki from '../assets/Home/rafiki.svg'
import rafiki1 from '../assets/Home/rafiki1.svg'
import rafiki2 from '../assets/Home/rafiki2.svg'
import rafiki3 from '../assets/Home/rafiki3.svg'
import overview from '../assets/Home/overview.png'
import overview2 from '../assets/Home/overview2.png'
import list from '../assets/Home/list.svg'
import list2 from '../assets/Home/list2.svg'
import standard from '../assets/Home/standard.svg'
import overview3 from '../assets/Home/appOverview.png'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'

const HomePages = () => {
  return (
    
<div class=" max-w-[1440px] min-h-[7747px] font-rubik mx-auto">
      <NavBar/>
<div class="container mx-auto">

      <div class="grid grid-cols-12  ">
      <div class=" col-span-12 lg:col-span-6  mt-[220px] mx-auto">
      <p class="text-[60px] mb-3 max-w-[500px] font-bold "> Observe Your Power  </p>

      <div>
      <p class="max-w-[505px] mx-auto"> Trafalgar provides progressive, and affordable healthcare,
       accessible on mobile and online for everyone </p>
      <button class="bg-[#2161D5] text-white px-5 py-2 mt-5 rounded-full">See a Demo</button>
      </div>
      </div>

      <div class=" col-span-12 lg:col-span-6 mt-[150px]">
      <img src={gambarhome} class=""></img>
      </div>
      </div>
      </div>

<div class=" mx-auto  gap-[20px] max-w-[707px] min-h-[130px] ">
<p class="text-[24px] mt-[150px] text-center p-3" >Why choose us? </p>
<p class=" mb-10  max-[700px] text-center"> We provide to you the best choiches for you. 
The leading political campaign intelligence platform</p>
</div>

<div class="container mx-auto">
<div class="grid grid-cols-12 mt-10">
<div class=" col-span-12 lg:col-span-4 mx-auto mt-10">
<div class="container border border-[#DDDDDD]  rounded-[20px] max-w-[327px] min-h-[331px] ">
<img class="p-5" src={data}></img>
<p class="p-5 text-[24px] font-semibold">Data</p>
<p class=" px-5 max-w-[300px]"> The biggest regional data, development, and POI data.</p>
</div>
</div>

<div class=" col-span-12 lg:col-span-4 mx-auto mt-10  ">
<div class="container border border-[#DDDDDD]  rounded-[20px] max-w-[327px] min-h-[331px] ">
<img class="p-5" src={chip}></img>
<p class="p-5 text-[24px] font-semibold">Technology</p>
<p class=" px-5 max-w-[300px]"> Geospatial platform with advanced analysis that suit your neetds.</p>
</div>
</div> 

<div class="col-span-12 lg:col-span-4 mx-auto  mt-10 ">
<div class="container border border-[#DDDDDD]  rounded-[20px] max-w-[327px] min-h-[331px] ">
<img class="p-5" src={services}></img>
<p class="p-5 text-[24px] font-semibold">Services</p>
<p class=" px-5 max-w-[300px]"> An expert team help you to analyze your poltical power. </p>
</div>
</div>
</div>
</div> 

<div class="container mx-auto justify-center flex">
<button class=" mt-10 border border-[#2161D5] bg-white text-[#2161D5] px-5 py-2 rounded-full "> Learn More </button>
</div>
<div class="mt-[100px] max-w-[1440px] min-h-[1850px] bg-blue-600 ">
<div class="flex justify-end">
<img class=" max-w-[131px] min-h-[150px]" src={element}></img>
</div>

<div class=" container grid grid-cols-12 mx-auto ">
<div class="col-span-12 lg:col-span-6">
<div class=" flex absolute ml-10">
<img class="mt-[-131px] " src={element2}></img>
</div>

<div class="mt-[-50px]">
<img class=" absolute ml-10 mt-[-150px] max-w-[345px] min-h-[400px]" src={overview}></img>
</div>
</div>

<div class="col-span-12 lg:col-span-6" >
        <p class="text-[24px] text-white mb-3 ">App Overview</p>
        <p class="max-w-[300px] text-white mb-5 "> Advanced spatial analysis to understand where and why things happen, identify the target constituency, and optimize the campaign.  </p>
        <button class="bg-[#2161D5] text-white border border-white px-5 py-2 rounded-full"> Learn More</button>
        </div>

</div>
<div class="container grid grid-cols-12 mx-auto mt-[300px]">
      <div class="col-span-12 lg:col-span-6 ml-[50px] mt-[150px]">
      <p class="text-[24px] text-white mb-3">App Overview 2</p>
      <p class="max-w-[300px] text-white mb-5 "> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
       <button class="bg-[#2161D5] text-white border border-white px-5 py-2 rounded-full"> Learn More</button>
</div>
<div class=" col-span-12 lg:col-span-6 mt-[-20px]">
<div class=" flex absolute   ">
<img class="p-4" src={element2}></img>
<img class="absolute" src={overview2}></img>
</div>
</div>
</div>
<div class="container grid grid-cols-12 mx-auto mt-[300px]">
      <div class="col-span-12 lg:col-span-6  mt-[-20px]mt-[150px]">
      <div class=" flex absolute   ">
      <img class=" " src={element2}></img>
<img class="absolute" src={overview3}></img>
      </div>
</div>
<div class="col-span-12 lg:col-span-6 mt-[-20px] ml-[50px]">

<p class="text-[24px] mt-[150px] text-white mb-3"> App Overview 3 </p>
      <p class="max-w-[300px] text-white  mb-5 ">Advanced spatial analysis to understand where and why things happen, identify the target constituency, and optimize the campaign.  </p>
       <button class="bg-[#2161D5] text-white border border-white px-5 py-2 rounded-full"> Learn More</button>

</div>
</div>
</div>

 <div class=" mx-auto  gap-[20px] max-w-[707px] min-h-[130px] ">
<p class="text-[24px] mt-[150px] text-center p-3" >How it works for you? </p>
<p class=" mb-10  min-h-[90px] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
<div class="justify-center flex">
<button class="bg-[#2161D5] text-white px-5 py-2 mt-5 rounded-full">See a Demo</button>
</div>
</div>

<div class=" container mx-auto flex justify-between max-w-[888px] min-h=[488px]">
<div class="text-center">
<img class="p-6 mx-auto" src={rafiki}></img>
<p class="text-[24px] text-center p-3" >Geographic Segmentation</p>
<p class=" mb-10  max-w-[368px] min-h-[72px] text-center"> Consist of creating differend groups of
customers based on geographic
boundaries</p>
</div>
<div class="text-center">
<img class="p-6 mx-auto" src={rafiki1}></img>
<p class="text-[24px] text-center p-3" >Demographic Segmentation</p>
<p class=" mb-10  max-w-[368px] min-h-[72px] text-center"> 
Consist of dividing the market through different variables such as age, gender, income, etc</p>
</div>
</div>
     
<div class=" container mx-auto flex justify-between max-w-[888px] min-h=[488px]">
<div class="text-center">
<img class="p-6 mx-auto" src={rafiki2}></img>
<p class="text-[24px] text-center p-3" >Psychograpich Segmentation</p>
<p class=" mb-10  max-w-[368px] min-h-[72px] text-center"> Consist of creating differend groups of
customers based on geographic
 boundaries</p>
</div>
<div class="text-center">
<img class="p-6 mx-auto" src={rafiki3}></img>
<p class="text-[24px] text-center p-3" >Behavorial Segmentation</p>
<p class=" mb-10  max-w-[368px] min-h-[72px] text-center"> Consist of creating differend groups of
customers based on geographic
 boundaries</p>
</div>
</div>

<div class=" mx-auto  gap-[20px] max-w-[707px] min-h-[130px] ">
<p class="text-[24px] mt-[150px] text-center p-3">How it works for you? </p>
<p class=" mb-10  min-h-[90px] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</div>

<div class="container mx-auto flex justify-center">

<div class="container max-w-[330px] min-h-[720px] border rounded-sm p-2 mx-4">
<img class=" mx-auto mt-20" src={standard}></img>
<img class=" mx-auto mt-10 " src={list}></img>
<div class=" text-center mt-48 "><span> $600 </span><span>/ mo</span></div>
<div class="justify-center flex">
<button class="bg-[#2161D5] text-white px-5 py-2 mt-2 rounded-full">See a Demo</button>
</div>

</div>

<div class="container max-w-[330px] min-h-[720px] border rounded-sm"> 
<img class=" mx-auto mt-20 " src={standard}></img>
<img class=" mx-auto mt-10 " src={list2}></img>
<div class="text-center mt-40">
<span>$600 </span><span>/ mo</span>
</div>
<div class="justify-center flex">
<button class="bg-[#2161D5] text-white px-5 py-2 mt-2 rounded-full">See a Demo</button>
</div>
</div>
</div>
<div>
<p class=" text-[24px] text-center mt-[100px]"> Frequenly Asked Questions </p>
<div class=" container max-w-[754px] min-h-[568px] mx-auto">
<div class=" flex justify-between text-blue-400 ">
<p>What do you mean by public-facing usage?</p>
<p> - </p>
</div>
<p class="max-w-[656px] min-h-[90px]"> We define public-facing usage as leveraging CARTO to power enterprise-scale applications that are made available to external parties such as clients or the public, as opposed to internal demonstration-only applications.</p>
<div class="container mx-auto border p-5 mb-5" >
      <div class="flex justify-between">
            <p>Can i  buy more storage for my individual plan?</p>
            <p>+</p>
      </div>
</div>
<div class=" container mx-auto border p-5 mb-5" >
      <div class="flex justify-between">
            <p>What happens to my data after the trial or if i cancel my subscription?</p>
            <p>+</p>
      </div>
</div>
<div class=" container mx-auto border p-5 " >
      <div class="flex justify-between">
            <p>Can i cancel my monthly or annual subscription?</p>
            <p>+</p>
      </div>
</div>
<div class="justify-center flex">
<button class="bg-[#2161D5] text-white px-5 py-2 mt-2 rounded-full">See a Demo</button>
</div>
</div>
</div>
<Footer/>
    
      
      
      
      
      
      
      
      
      
      
      
      
      
  
      </div>
  )
}

export default HomePages