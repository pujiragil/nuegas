import { useState } from "react";

type SwitchType = "general" | "notification";

const activeTab: string =
  "text-secondary-100 p-3 relative cursor-pointer transition-all duration-200 ease-in after:w-full after:h-0.5 after:bg-tertiary-100 after:absolute after:bottom-0 after:left-0 after:rounded-full";
const inactiveTab: string =
  "text-secondary-300 p-3 cursor-pointer hover:text-secondary-200 transition-all duration-200 ease-in-out";

const SwitchTab = () => {
  const [switchValue, setSwitchValue] = useState<SwitchType>("general");

  return (
    <div className="flex px-6 gap-7 text-sm font-base">
      <p
        onClick={() => setSwitchValue("general")}
        className={switchValue === "general" ? activeTab : inactiveTab}
      >
        General
      </p>
      <p
        onClick={() => setSwitchValue("notification")}
        className={switchValue === "notification" ? activeTab : inactiveTab}
      >
        Notification
      </p>
    </div>
  );
};

export default SwitchTab;
