import lingkaran from '../assets/group 1930.png'
import vector from '../assets/Vector.svg'
import orang1 from '../assets/orang1.png'
import orang2 from '../assets/orang2.png'
import orang3 from '../assets/orang3.png'
import jokowi from '../assets/jokowi.svg'
import Aielangga from '../assets/Aielangga.svg'
import puan from '../assets/puan.svg'

function AboutUS() {


    return (
      <>
        <div class="min-h-[734px] bg-[#2161D5] ">
        <div class="flex justify-center">
        <img class=" absolute max-w-[911px] min-h-[911px] "src={lingkaran}></img>
        </div>

       <div class="py-[220px]">
       <p class="text-[60px]  text-center font-semibold text-white  "> About Us </p>
       <div class="flex justify-center mt-[50px]">
       <p class=" text-center text-white max-w-[563px] min-h-[96px] text-[16px] "> A small company offering data-driven solutions for campaign effectiveness using spatial data and detailed analysis of target audience (voters). Use technology that unites spatial data science and political science. </p>
       </div>

        <div class="flex justify-center">
        <button class="px-10 py-2 rounded-full text-[#2161D5] bg-white">Contact Us</button>
        </div>
        </div> 

        </div>
        <div class="flex justify-center mt-44 ">
        <img src={vector}></img>
        </div>
        <div class="flex justify-center mt-10 ">
            <p class="max-w-[750px] text-center min-h-[108px] text-[24px] text-[#4F5665]"> In just small steps you’ll connected directly to our technology.
Knowledge about your own-power, y.our rivals,
your voters, and your region in Election.</p>
        </div>
        <div class="flex flex-shrink-0 justify-center mt-44 ">
            <h3 class="font-semibold text-[42px] max-w-[769px] min-h-[52px] text-[#1E0E62]"> Our Advisors</h3>
        </div>
        <div class="container mx-auto max-w-[870px] min-h-[262px] flex flex-shrink-0 justify-between mt-20">
<div class=" max-w-[270px] min-h-[262px] ">
    <img src={orang1}></img>
    <h5 class="text-[22px] text-[#0B132A] py-2 text-center"> Xavier Oswald</h5>
    <p class="text-[14px] text-[#4F5665] text-center  tracking-[2px]"> co-founder, developer</p>
</div>
<div class="max-w-[270px] min-h-[262px]">
    <img src={orang2}></img>
    <h5 class="text-[22px] text-[#0B132A] py-2 text-center"> Sara Creighton</h5>
    <p class="text-[14px] text-[#4F5665] text-center  tracking-[2px]"> co-founder, developer</p>
</div>
<div class="max-w-[270px] min-h-[262px]">
    <img src={orang3}></img>
    <h5 class="text-[22px] text-[#0B132A] py-2 text-center">Brandon Ogden</h5>
    <p class="text-[14px] text-[#4F5665] text-center  tracking-[2px]"> Project manager</p>
</div>
</div>
<div class="flex justify-center mt-40 ">
            <h3 class="font-semibold text-[42px] max-w-[769px] min-h-[52px] text-[#1E0E62]"> What Political Figure Say</h3>
        </div>

        <div class="flex justify-center mt-10 ">
            <p class="max-w-[555px] text-center min-h-[70px] text-[16px] text-[#4F5665]"> These are the stories of political figure who have joined us with great pleasure when using this crazy feature.</p>
        </div>

<div class="container max-w-[1300px] min-h-[230px] mx-auto flex flex-shrink-0 justify-between  ">
    <div class=" container max-w-[400px] min-h-[230px] border rounded-lg">
        <div class=" flex justify-center max-w-[340px] min-h-[52px] mt-6 ml-6 ">
            <img class="px-3" src={Aielangga}></img>
            <div>
                <p class="font-semibold text-[#0B132A] ">Airlangga Hartanto</p>
                <p class="max-w-[270px] min-h-[30px] text-[14px]">Menteri Koordinator dan Perekonomian RI</p>
            </div>
        </div>
            <p class=" max-w-[350px] min-h-[100px] text-[#0B132A] p-3 ml-6" > Saya minta kepada segenap pengurus DPD, provinsi, kabupten dan kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan penggalangan opini masyarakat</p>
    </div>
    <div class=" container max-w-[400px] min-h-[230px] border rounded-lg">
        <div class=" flex max-w-[340px] min-h-[52px] mt-6 ml-6 ">
            <img class="px-3" src={jokowi}></img>
            <div>
                <p class="font-semibold text-[#0B132A] ">Joko Widodo</p>
                <p class="max-w-[270px] min-h-[30px] text-[14px]">Presiden RI</p>
            </div>
        </div>
            <p class=" max-w-[350px] min-h-[100px] text-[#0B132A] p-3 ml-6" > Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan </p>
    </div>
    <div class=" container max-w-[400px] min-h-[230px] border rounded-lg">
        <div class=" flex justify-center max-w-[340px] min-h-[52px] mt-6 ml-6 ">
            <img class="px-3" src={puan}></img>
            <div>
                <p class="font-semibold text-[#0B132A] ">Puan Maharani</p>
                <p class="max-w-[270px] min-h-[30px] text-[14px]">Ketua DPR dan Fraksi PDI Perjuangan</p>
            </div>
        </div>
            <p class=" max-w-[350px] min-h-[100px] text-[#0B132A] p-3 ml-6" > Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan masyarakat ketikaproses demokratisasi berlangsung.</p>
    </div>
</div>
<div class="mt-6"></div>
      </>
    )
  }

  export default AboutUS