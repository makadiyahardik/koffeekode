import React, { useState } from 'react';
import InputBox from '../../atoms/InputBox/InputBox';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const EmiCalculator = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [massage, setMassage] = useState('');
  const [isError, setIsErrors] = useState('');

  let schema;

  schema = yup
    .object({
      amount: yup.string().required(' amount is required'),
      year: yup.string().required('year is required'),
      rate: yup.string().required('rate is required'),
    })
    .required();
  const {
    register,
    handleSubmit,
    reset ,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const API_URL = 'https://koffeecode/api/Calculate';

  const onSubmit = async (data) => {
    console.log('data', typeof data.amount);
    try {
      const requestData = {
        amount: Number(data.amount),
        rate: Number(data.rate),
        tenure: Number(data.year),
      };
      console.log('requestData', typeof requestData.year);

    

      console.log(typeof requestData, 'type');
      const response = await axios.post(API_URL, requestData
      );

      if (response.status === 200) {
        const responseData = response.data;
        console.log(responseData, 'responseData');
        setMassage('Successfully created loan tenure');
        setUserInfo(responseData);
        reset();
      } else {
        setIsErrors('Something went wrong. Please try again later.');
        reset();
      }
    } catch (err) {
      setIsErrors('Something went wrong. Please try again later.');
      reset();
    }
  };

  return (
    <div className="mt-[5rem]">
      <div className="bg-white shadow-md rounded-md md:max-w-[1200px] flex flex-col justify-center items-center mx-auto md:mt-[6rem] p-5">
        <div className="flex flex-col justify-center items-center ">
          <div>
            <button className="text-[16px] leading-[26px]  text-[#fff] bg-[#046598] emicacls py-[1.5px] px-[12px] rounded-[4px]">
              Emi Calculator
            </button>
          </div>
          <div className="flex flex-col justify-center items-center my-2">
            <h1 className="text-[24px] font-bold  text-[#333]">
              Emi Calculator
            </h1>
            <div className="bg-[#333] w-8 h-[2px]"></div>
          </div>
          <div>
            <h1 className="text-[16px] leading-[26px]  text-[#727272]">
              Calculate Your Emi per Month Quickly
            </h1>
          </div>
        </div>
        <div className="bg-[#eee] h-[1px] w-full my-[3rem]" />

        <div className="flex w-full md:flex-row flex-col mx-auto">
          <div className=" w-full">
            <div
              className="flex flex-col justify-start
   items-center"
            >
              {massage && massage}
              <form
                className="text-[16px] font-semibold leading-[30px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-col-12">
                  <div className="flex flex-col justify-start">
                    <InputBox
                      id="amount"
                      name="amount"
                      type="number"
                      placeholder="Enter loan amount"
                      register={register}
                      error={errors.amount}
                      label="Loan Amount :"
                    />
                  </div>
                  <div className="grid grid-cols-2 md:gap-5 gap-2 mt-5">
                    <div className="flex flex-col justify-start">
                      <InputBox
                        id="year"
                        name="year"
                        type="number"
                        placeholder="Enter No. of year"
                        register={register}
                        label="Tenure :"
                        error={errors.year}
                      />
                    </div>{' '}
                    <div className="flex flex-col justify-start">
                      <InputBox
                        id="rate"
                        name="rate"
                        type="number"
                        placeholder="Enter rate of interest %"
                        label="Interest Rate :"
                        register={register}
                        error={errors.rate}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <input
                    type="submit"
                    className="md:max-w-[100px] text-white cursor-pointer flex justify-center items-center h-12 w-full  text-center border-[1px]  py-[10px] px-[10px] rounded-[4px] inputBox   text-[15px]   "
                    style={{
                      backgroundColor: '#046598',
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className=" w-full flex flex-col items-center mt-8 justify-start">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-[24px]   text-[#333]">
                Calculate Your Emi per Month Quickly
              </h1>
              <h4 className="text-[18px]   text-[#333]">₹ {userInfo?.emi} </h4>
            </div>

            <div className="flex justify-between space-x-4 items-center mt-5">
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-[18px]   text-[#333]">Total Interest</h1>
                <h4 className="text-[18px]   text-[#333]">₹  {userInfo?.interest}</h4>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-[18px]   text-[#333]">
                  Amount With Interest
                </h1>
                <h4 className="text-[18px]   text-[#333]">₹ {userInfo?.totalamt}</h4>
              </div>
            </div>
            <div className="mt-3">
              <button
                className=" text-white cursor-pointer flex justify-center items-center h-12 w-full  text-center border-[1px]  py-[10px] px-[10px] rounded-[4px] inputBox   text-[15px]   "
                style={{
                  backgroundColor: '#046598',
                }}
              >
                Apply For Loan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
