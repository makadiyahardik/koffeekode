import routes from "@/PublicRoutes/routes";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";
function Header(props) {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const onMoboClick = () => {
    props.onMoboClicks();
  };

  return (
    <>
      <div
        className={
          "md:fixed md:top-0 md:w-full md:py-[10px]  md:transition-all " +
          (scrollActive ? " md:z-[1000] md:shadow-md  md:bg-white" : " pt-4")
        }>
        <div className="md:max-w-[1400px] w-full bg-white md:px-10 px-5 mx-auto ">
          <div className="flex  justify-between  md:items-center  ">
            <div className="flex justify-start items-center">
             <img
             src="../assets/images/logo.png"
             alt="Logo"
             className="w-[8rem] h-auto"
             />
              <div className=" md:flex hidden md:ml-12">
            {routes?.map((item, index) => {
                return (
                  <div
                    className=" text-[16px]  leading-[32px]  cursor-pointer"
                    key={index}
                  >
                    <LinkScroll
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      onSetActive={() => {
                        setActiveLink(item.link);
                      }}
                      className={
                        'px-4 py-2 Workcursor-pointer animation-hover hover:text-[#046598]  inline-block relative' +
                        (activeLink === `${item.link}`
                          ? ' text-[#046598] animation-active font-bold '
                          : ' text-primary')
                      }
                    >
                      {item.name}
                    </LinkScroll>
                  </div>
                );
              })}
            </div>
            </div>
            
            <div className="text-[15px] flex space-x-4 leading-[22px] text-[#046598] cursor-pointer ">
              <button
                className="border-[#046598] border-solid border-[2px] py-[7px]  px-[18px]  rounded-[40px] md:flex hidden text-[18px]  leading-[22px] text-[#046598] cursor-pointer text-center hover:bg-[#046598] hover:text-white ease-in-out duration-500"
              >
                Sin In
              </button>
              <button
                className="border-[#046598] border-solid border-[2px] py-[7px]  px-[18px]  rounded-[40px] md:flex hidden text-[18px]  leading-[22px] text-[#046598] cursor-pointer text-center hover:bg-[#046598] hover:text-white ease-in-out duration-500"
              >
                Post Property
              </button>
              <div className="md:hidden block " onClick={props.onMoboClicks}>
                {props.showNav ? (
                  <AiOutlineCloseCircle size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </div>
            </div>

            <div
              className={
                props.showNav
                  ? "fixed top-[4rem] left-0 bg-[#046598] w-full ease-in-out duration-500 z-[1000]"
                  : "fixed top-[-100%]"
              }>
                
              <div className="md:hidden flex flex-col text-white p-5   mx-auto justify-center items-center">
              {routes?.map((item, index) => {
                return (
                  <div className="my-2 leading-[30px] text-[18px] font-semibold cursor-pointer "
                  key={index}>
                  
                  <LinkScroll
                   to={item.link}
                   spy={true}
                   smooth={true}
                   duration={500}
                   offset={-100}
                    onSetActive={() => {
                      setActiveLink(item.link);
                    }}
                    className={
                      'px-4 py-2 Workcursor-pointer animation-hover inline-block relative' +
                      (activeLink === `${item.link}`
                        ? ' text-[#046598] animation-active font-bold '
                        : ' text-white')
                    }
                  >
                    {item.name}
                  </LinkScroll>
                </div>
                );
              })}
           <button
                className="border-[#fff] border-solid border-[2px] py-[7px] mt-4 px-[18px]  rounded-[40px]  text-[18px]  leading-[22px] text-[#fff] cursor-pointer text-center  ease-in-out duration-500 hover:bg-white hover:text-[#046598]"
              >
                Sin In
              </button>
              <button
                className="border-[#fff] border-solid mt-6 hover:bg-white hover:text-[#046598] border-[2px] py-[7px]  px-[18px]  rounded-[40px]  text-[18px]  leading-[22px] text-[#fff] cursor-pointer text-center  ease-in-out duration-500"
              >
               Post Property
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
