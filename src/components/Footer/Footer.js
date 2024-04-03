import React from "react";
import { Link as LinkScroll } from "react-scroll";

function Footer() {
 
  return (
    <div className="mt-[8rem] relative" id="Footer">
      <div className="w-full bg-[#046598]  md:px-10 px-5">
        <div className="  md:max-w-[1400px]  md:px-10 px-5 mx-auto flex w-full">
          <div className="w-full grid md:grid-cols-4 sm:grid-cols-2  mx-auto  gap-x-2 items-start  md:gap-x-16 md:gap-y-5 my-5 gap-y-8">
            <div className="flex flex-col justify-start text-[#ffffff]">
            <img
             src="../assets/images/Footer_Logo.png"
             alt="Logo"
             className="w-[6rem] h-auto "
             />
             <h4 className="text-[#fff] font-bold text-[14px] mt-8">About Us</h4>
              <p className="text-[16px] text-[#fff] mt-4">
              HomeXp is India's Most Popular Property marketplace to buy,
sell, and rent residential and commercial properties.
              </p>
              <h4 className="text-[#fff] font-bold text-[14px] mt-6">Contact Us</h4>
              <p className="text-[16px] text-[#fff] mt-2">
              (+91) 92652 31400
              </p>
              <p className="text-[16px] text-[#fff] mt-4">
              homexp.in@gmail.com
              </p>
            </div>
            <div className="flex flex-col justify-start text-[#fff]">
              <h1 className="my-4 text-[18px] font-semibold  leading-[1.1px] ">
                Useful Links
              </h1>
              <div className="bg-white w-8 h-[2px]"></div>

              <ul className=" text-[16px] mt-6  leading-[32px] cursor-pointer">
                <li>
                  {" "}
                  <LinkScroll
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                    Home
                  </LinkScroll>
                </li>
                <li className="my-3">
                  <LinkScroll
                    to="WhoWeAre"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                    About Us
                  </LinkScroll>
                </li>
                <li className="my-3">
                  <LinkScroll
                    to="Service"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                    Terms and Condition
                  </LinkScroll>
                </li>

                  <li className="my-3">
                    <LinkScroll
                      to="Client"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={-100}>
                 Privacy Policy
                    </LinkScroll>
                  </li>

                <li className="my-3">
                  <LinkScroll
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                    Contact 
                  </LinkScroll>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
            <h1 className="my-4 text-[18px] font-semibold  leading-[1.1px] ">
                Other Links
              </h1>
              <div className="bg-white w-8 h-[2px]"></div>


              <ul className=" text-[16px] mt-6  leading-[32px] cursor-pointer">
                <li>
                  {" "}
                  <LinkScroll
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                    EMI Calculator
                  </LinkScroll>
                </li>
                <li className="my-3">
                  <LinkScroll
                    to="WhoWeAre"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                    Balance Transfer
                  </LinkScroll>
                </li>
                <li className="my-3">
                  <LinkScroll
                    to="Service"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                 Package
                  </LinkScroll>
                </li>

                  <li className="my-3">
                    <LinkScroll
                      to="Client"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={-100}>
                 HomeXp Service
                    </LinkScroll>
                  </li>

                <li className="my-3">
                  <LinkScroll
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                   HomeXp Loans
                  </LinkScroll>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
            <h1 className="my-4 text-[18px] font-semibold  leading-[1.1px] ">
                Keep In Touch
              </h1>
              <div className="bg-white w-8 h-[2px]"></div>


              <div  className="text-[18px] mt-4  flex flex-col leading-[51px]">
                <div>
                    <input
                    type="email"
                    placeholder="Enter email"
                    className="h-12 border bg-[#fbfdff] text-[#677B84] focus:border-[#dde6ef] border-[#dde6ef] ring-0 focus:ring-0  outline-none rounded-[3px] placeholder-grey px-4"/>
                </div>
              <div className="mt-3 flex">


              <button
                className="bg-[#424242] border-[#424242]  px-[20px] py-[4px] border-[1px]   rounded-[4px] flex  text-[15px] font-medium  text-[#fff] cursor-pointer  text-center ease-in-out duration-500 btn-footer hover:border-[#494949] hover:bg-[#494949]
                "
                >
                Subscribe
              </button>
              </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[2px] w-full md:px-10 px-5 bg-white"/>
      </div>
      <div className="w-full bg-[#046598] py-5 md:px-10 px-5">
        <div className="md:max-w-[1400px] md:px-10 px-5 mx-auto flex w-full justify-center flex-col md:flex-row text-[#FFFFFF]">
          <div className="text-[16px] text-[#fff]">
          Copyright © 2020 All Rights Reserved.
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
