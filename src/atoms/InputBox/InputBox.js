import React from "react";
const InputType = ({
  name,
  error,
  id,
  placeholder,
  type,
  maxLength,
  className,
  disabled,
  onFocus,
  onBlur,
  max,
  register,
  label
}) => {
  return (
    <div className="flex flex-col w-full">
      <p className="my-1 text-[18px] text-[#333] font-light leading-[24px] ">{label}</p>
      <input
        className={`${className} h-12 inputBox  font-light text-[#677B84] focus:border-[#677B84] border-[#dde6ef] ring-0 focus:ring-0 outline-none border-[1px] rounded-[3px] placeholder-[#999] px-4 bg-[#fbfdff] opacity-100`}
        {...register(id)}
        name={name}
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
        max={max}
      />

      {error && (
        <div className="text-[#FF7171] text-[12px] flex items-center">
        
          <div className="ml-1">{error.message}</div>
        </div>
      )}
    </div>
  );
};

export default InputType;
