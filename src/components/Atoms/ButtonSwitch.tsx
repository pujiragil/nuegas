import { FC, ReactElement, useState } from "react";

interface ButtonSwitchProps {
  isActive: boolean;
}

const ButtonSwitch: FC<ButtonSwitchProps> = ({ isActive }): ReactElement => {
  return (
    <div
      className="w-[55px] h-[30px] rounded-full border border-primary-300 p-[5px] cursor-pointer"
    >
      <span
        className={`${isActive
          ? "translate-x-full bg-tertiary-100"
          : "translate-x-0 bg-primary-300"
          } w-5 h-5 block rounded-full duration-300 ease-in`}
      ></span>
    </div>
  );
};

export default ButtonSwitch;
