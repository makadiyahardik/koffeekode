import React from 'react';
import { FaBuilding } from 'react-icons/fa';
const HomeLoan = () => {
  return (
    <div className="mt-10">
      <div className="bg-[#FBFBFB] ">
        <div className="md:max-w-[1240px] w-full md:px-10 px-5 py-10">
          <div className="flex flex-col justify-center text-center mx-auto">
            <div className="flex flex-col justify-center items-center ">
              <div>
                <button className="text-[16px] leading-[26px]  text-[#fff] bg-[#046598] emicacls py-[1.5px] px-[12px] rounded-[4px]">
                  Home Loan Calculator
                </button>
              </div>
              <div className="flex flex-col justify-center items-center my-2">
                <h1 className="text-[24px] font-bold  text-[#333]">
                  Home Loan Calculator
                </h1>
                <div className="bg-[#333] w-8 h-[2px]"></div>
              </div>
              <div>
                <h1 className="text-[16px] leading-[26px]  text-[#727272]">
                  Deside Your Budget
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex  mt-[4rem] justify-center  items-center  mx-auto    md:gap-y-5 my-5 gap-y-8 ">
           <div className='grid md:grid-cols-4 sm:grid-cols-2 mx-auto md:gap-x-10 md:space-y-0 space-y-8 '>
           <div className="flex flex-col justify-start py-[30px] px-[40px] ease-in-out duration-500 items-center bg-white cardShadow rounded-[6px] text-[#888]  hover:text-white ">
              <div className="round  h-[80px] w-[80px] flex justify-center items-center rounded-full">
                <FaBuilding
                  className="custom-icon"
                  style={{ width: '30px', height: '30px' }}
                />
              </div>

              <div className="mt-5">
                <h1 className="my-[5px]  text-[22px] font-semibold leading-[26px] ">
                  EMO Calculator
                </h1>
                <p className="my-[5px]   text-[16px] font-semibold leading-[26px] ">
                  Deside Your Budget
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start py-[30px] px-[20px] ease-in-out duration-500 items-center bg-white cardShadow rounded-[6px] text-[#888]  hover:text-white ">
              <div className="round  h-[80px] w-[80px] flex justify-center items-center rounded-full">
                <FaBuilding
                  className="custom-icon"
                  style={{ width: '30px', height: '30px' }}
                />
              </div>

              <div className="mt-5">
                <h1 className="my-[5px]  text-[22px] font-semibold leading-[26px] ">
                  EMO Calculator
                </h1>
                <p className="my-[5px]   text-[16px] font-semibold leading-[26px] ">
                  Deside Your Budget
                </p>
              </div>
            </div>{' '}
            <div className="flex flex-col justify-start py-[30px] px-[20px] ease-in-out duration-500 items-center bg-white cardShadow rounded-[6px] text-[#888]  hover:text-white ">
              <div className="round  h-[80px] w-[80px] flex justify-center items-center rounded-full">
                <FaBuilding
                  className="custom-icon"
                  style={{ width: '30px', height: '30px' }}
                />
              </div>

              <div className="mt-5">
                <h1 className="my-[5px]  text-[22px] font-semibold leading-[26px] ">
                  EMO Calculator
                </h1>
                <p className="my-[5px]   text-[16px] font-semibold leading-[26px] ">
                  Deside Your Budget
                </p>
              </div>
            </div>{' '}
            <div className="flex flex-col justify-start py-[30px] px-[20px] ease-in-out duration-500 items-center bg-white cardShadow rounded-[6px] text-[#888]  hover:text-white ">
              <div className="round  h-[80px] w-[80px] flex justify-center items-center rounded-full">
                <FaBuilding
                  className="custom-icon"
                  style={{ width: '30px', height: '30px' }}
                />
              </div>

              <div className="mt-5">
                <h1 className="my-[5px]  text-[22px] font-semibold leading-[26px] ">
                  EMO Calculator
                </h1>
                <p className="my-[5px]   text-[16px] font-semibold leading-[26px] ">
                  Deside Your Budget
                </p>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;
