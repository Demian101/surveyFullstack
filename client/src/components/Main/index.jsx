import React, { useRef, useState } from "react";
import Button from "./Button";
import { AiOutlineMenu } from "react-icons/ai";

// png
import main_title from '../../assets/slices/main title@2x.png';
import location from '../../assets/slices/zhiyuandidian3@2x.png'
import calendar from '../../assets/slices/Calendar@2x.png'
import logo from '../../assets/slices/logo@2x.png';

// import Frame1 from '../../assets/Timelineslices/Frame1@2x.png';
import MeetingArrange from '../../assets/Timelineslices/MeetingArrange.png';
import round1 from '../../assets/Timelineslices/round1.png';
import { useNavigate } from "react-router-dom";



const Main = () =>{
  let Links = [
    { name: "嘉宾", link: "/" },
    { name: "关于", link: "/" },
    { name: "直播", link: "/" }
  ];
  const navigate = useNavigate();
  const argRef = useRef(null);
  const guestRef = useRef(null);
  const aboutRef = useRef(null);

  let [open, setOpen] = useState(false);

  const scrollDown = (ref) => { 
    setOpen(!open)
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  console.log('argRef ', argRef)
  console.log('guestRef ', guestRef)
  return (
    <div className='h-full bg-gradient-to-r from-indigo-900 via-purple-900 to-black'>
      {/* <NavBar {...argRef}/> */}
      
      {/* NavBar  */}
      <div className="shadow-md z-20 w-full fixed top-0 left-0  bg-gradient-to-r from-indigo-800 via-purple-600 to-black">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          
          <img src={logo} className="w-1/2 h-auto md:w-1/4 md:h-auto md:pl-20" alt="logo" />
        
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <AiOutlineMenu className='text-white' name={open ? "close" : "menu"} />
          </div>
          
          <ul
            className={`md:flex md:items-center md:pb-0 pb-4 rounded-md absolute md:static bg-white md:bg-inherit md:z-auto -z-40 left-0 w-full md:w-auto md:pl-0 pl-9  duration-75 transition-all  ease-in ${
              open ? "top-16 " : "top-[-490px]"
            }`}
          >
            
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a href={"/"} className=" md:text-slate-50 text-slate-600  hover:text-gray-400 duration-500" >
                {"首页"} </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <button onClick={()=>scrollDown(argRef)} className=" md:text-slate-50 text-slate-600  hover:text-gray-400 duration-500" >
                会议安排 </button>
            </li>

            <li className="md:ml-8 text-xl md:my-0 my-7">
              <button onClick={()=>scrollDown(aboutRef)} className=" md:text-slate-50 text-slate-600  hover:text-gray-400 duration-500" >
                关于 </button>
            </li>

            {/* <li className="md:ml-8 text-xl md:my-0 my-7">
              <button onClick={()=>scrollDown(guestRef)} className=" md:text-slate-50 text-slate-600  hover:text-gray-400 duration-500" >
              嘉宾 </button>
            </li> */}
            
          <Button> 注册参会 </Button>
          
          {/* <button className='w-10 z-30 h-6'>注册参会</button> */}
          </ul>
          
        </div>
      </div>   {/* NavBar */}


      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>&nbsp; </div>
      {/* <div className='bg-[url("../../assets/slices/logintakepartin.png")] bg-no-repeat'> 2222222222</div> */}

      {/* 论坛 大海报 */}
      <div>
        <img src={main_title} className="cursor-pointer w-4/5 mt-44 mx-10 md:w-9/12 md:mt-24 md:ml-36"  alt="logo" />
      </div>

      {/* 时间表、地址 */}
      <div className='flex justify-center'>
        <div className='pt-2'>
          <span> <img src={calendar} className='w-4 inline pb-1' /></span>
          <span className='text-base text-slate-50 pt-10 ml-1'> 2022年11月06-07日  &nbsp;&nbsp;&nbsp; </span>
        </div>
        <div className='pt-2 pl-4'>
          <span> <img src={location} className='w-4 inline pb-1' /></span>
          <span className='text-base text-slate-50 pt-10 ml-1'> 杭州龙湖皇冠假日酒店  &nbsp;&nbsp;&nbsp; </span>
        </div>
      </div>

      <div className='flex justify-center p-10'>
        <button className='bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200 px-6 py-3 rounded-md shadow-2xl text-lg text-black'
           onClick={()=> navigate("/form")}>
          注册参会
        </button>
      </div>

    {/* 11.06 内容 */}
    <div className='flex justify-center pr-20 pt-28' ref={argRef}>
      <div className='flex flex-col '>
        <div className='w-1/2 ' >
          <img src={MeetingArrange} className='w-auto'/>
        </div>  {/* 会议安排 */}
        <div className="flex flex-col items-center pt-4 pb-10 mt-4 px-0 border-solid border-2 border-slate-50">
          <div className='pt-4 pb-1'>
            <span className='inline text-slate-50 text-lg'> 11 月</span>
            <span className='inline text-slate-50 text-4xl'> 06</span>
            <span className='inline text-slate-50 text-lg'> 日</span>
          </div>
        </div>
      </div> {/* 左部分白框 */}
      <div className='pl-10 pt-10 pb-2'>  {/* 右部分 - 智慧谷 */}
        <span className='text-2xl pb-8 text-slate-50'> 智慧谷 </span>
        
        {/* 大会报告处字数多，超出了范围，挤压图片*/}
        <div className="flex justify-center text-slate-50 pt-2">
          <table className="table-fixed">
            <tbody className=" ">
              <tr> 
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' />12:00-14:30</td>
                <td className="text-left px-2 text-sm">签到(循环播放短片)</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' />14:30-15:00</td>
                <td className="text-left px-2 text-sm">开幕式、领导致辞</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' />15:00-17:00</td>
                <td className="text-left px-2 text-sm">大会报告(政、学、企、投)</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' />17:00</td>
                <td className="text-left px-2 text-sm">回酒店，晚宴</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> 

    {/* 11.07 内容 */}
    <div className='flex justify-center pr-20 pt-10' >
      <div className='flex flex-col '>
        <div className='w-1/2 ' >
          <img src={MeetingArrange} className='w-auto'/>
        </div>  {/* 会议安排 */}
        <div className="flex flex-col items-center pt-4 pb-64 mt-4 px-0 border-solid border-2 border-slate-50">
          <div className='pt-4 pb-1'>
            <span className='inline text-slate-50 text-lg'> 11 月</span>
            <span className='inline text-slate-50 text-4xl'> 07</span>
            <span className='inline text-slate-50 text-lg'> 日</span>
          </div>
        </div>
      </div> {/* 左部分白框 */}
      <div className='pl-10 pt-10 pb-20'>  {/* 右部分 - 智慧谷 */}
        <span className='text-2xl pb-8 text-slate-50'> 杭州龙湖皇冠假日酒店 </span>
        
        <div className="flex justify-center text-slate-50 pt-2">
          <table className="table-fixed">
            <tbody className=" ">
              <tr> 
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 08:30-09:00</td>
                <td className="text-left px-2 text-sm">签到(循环播放短片)</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 09:00-10:00</td>
                <td className="text-left px-2 text-sm">合成生物学“院士谈”</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 10:00-10:15</td>
                <td className="text-left px-2 text-sm">茶歇</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 10:15-11:00</td>
                <td className="text-left px-2 text-sm">合成生物学“企业说”</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 11:00-12:00</td>
                <td className="text-left px-2 text-sm">合成生物学学术前沿</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 12:00-12:15</td>
                <td className="text-left px-2 text-sm">合影</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 12:15-13:30</td>
                <td className="text-left px-2 text-sm">午餐</td>
              </tr>

              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 13:30-14:30</td>
                <td className="text-left px-2 text-sm">合成生物学“院士谈”</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 14:30-16:30</td>
                <td className="text-left px-2 text-sm">合成生物学“企业说”</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 16:30-16:45</td>
                <td className="text-left px-2 text-sm">茶歇</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 16:45-18:00</td>
                <td className="text-left px-2 text-sm">合成生物学投资圆桌论坛</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 18:00-19:00</td>
                <td className="text-left px-2 text-sm">晚餐</td>
              </tr>
              <tr>
                <td className="text-left px-2 text-xs"> <img src={round1} className='inline pb-1 pr-1' /> 19:00-22:00</td>
                <td className="text-left px-2 text-sm">分论坛</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div> 


    {/* 关于 */}
    <div className='grid' ref={aboutRef}>
      about-施工中
    </div>


    <div className=" bg-inherit pt-20" ref={guestRef}>
        <h2>嘉宾-施工中</h2>
    </div>

  </div> 
  )
};

export default Main;


// /*
//     <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
//       <div className="container flex flex-wrap justify-between items-center mx-auto">
//       <a href="https://flowbite.com/" className="flex items-center">
//           <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
//           <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//       </a>
//       <div className="flex items-center md:order-2">
//           <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex justify-center items-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
//             {/* <svg className="mr-2 w-5 h-5 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use xlink:href="#a" y="420"/><use xlink:href="#a" y="840"/><use xlink:href="#a" y="1260"/></g><use xlink:href="#a" y="1680"/></g><use xlink:href="#b" x="247" y="210"/></g><use xlink:href="#c" x="494"/></g><use xlink:href="#d" x="988"/><use xlink:href="#c" x="1976"/><use xlink:href="#e" x="2470"/></g></svg> */}
//             English (US)
//           </button>
//           {/* <!-- Dropdown --> */}
//           <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown-menu">
//             <ul className="py-1" role="none">
//               <li>
//                 <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
//                   <div className="inline-flex items-center">
//                     {/* <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/></g></svg>               */}
//                     English (US)
//                   </div>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
//                   <div className="inline-flex items-center">
//                     {/* <svg className="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"/><path d="M0 0h512v170.7H0z"/><path fill="#d00" d="M0 170.7h512v170.6H0z"/></svg> */}
//                     Deutsch
//                   </div>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
//                   <div className="inline-flex items-center">
//                     {/* <svg className="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z"/><path fill="#009246" d="M0 0h170.7v512H0z"/><path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/></g></svg>               */}
//                     Italiano
//                   </div>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
//                   <div className="inline-flex items-center">
//                     {/* <svg className="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512"><defs><path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"/></defs><path fill="#de2910" d="M0 0h512v512H0z"/><use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"/><use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a"/><use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a"/><use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a"/><use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a"/></svg> */}
//                     中文 (繁體)
//                   </div>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <button data-collapse-toggle="mobile-menu-language-select" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-language-select" aria-expanded="false">
//           <span className="sr-only">Open main menu</span>
//           {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> */}
//         </button>
//       </div>
//       <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
//         <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//           <li>
//             <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
//           </li>
//           <li>
//             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//           </li>
//           <li>
//             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//           </li>
//           <li>
//             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
//           </li>
//           <li>
//             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//           </li>
//         </ul>
//       </div>
//       </div>
//     </nav>
// */


//生成代码：
