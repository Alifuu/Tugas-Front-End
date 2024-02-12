import gambar from '../assets/404.png'

const NotFound = () => {
  return (
    <div>

    <div class="flex-col font-Rubik">
    
    <div class="grid grid-cols-12  "> 
    <div class="col-span-12 lg:col-span-6 gap-20 mt-[320px] ml-[200px]">
       <div>
        <p class="text-[24px] mb-3 ">Ooops!</p>
        <p class="text-[24px] mb-3"> Page Not Found</p>
      </div>
        <div>
        <p class="max-w-[300px] mb-5 "> This page doesn`t exist or was removed We suggest you back to home </p>
        <button class="bg-[#2161D5] text-white px-5 py-2 rounded-full"> Learn More</button>
        </div>
      </div>

    <div class="col-span-12 lg:col-span-6 mt-[150px] ml-[50px]">
 <img src={gambar} class="max-w-[600px] min-h-[400px] ">

 </img>
    </div>
    </div>
    </div>
    </div>
  )
}

export default NotFound