import { shallow } from "zustand/shallow";
import useSettingStore from "../../store/settingStore";

const activeTab: string =
  "text-secondary-100 p-3 relative cursor-pointer transition-all duration-200 ease-in after:w-full after:h-0.5 after:bg-tertiary-100 after:absolute after:bottom-0 after:left-0 after:rounded-full";
const inactiveTab: string =
  "text-secondary-300 p-3 cursor-pointer hover:text-secondary-200 transition-all duration-200 ease-in-out";

const SwitchTab = () => {
  const [selectedTab, setSelectedTab] = useSettingStore(
    (state) => [state.selectedTab, state.setSelectedTab],
    shallow
  );

  return (
    <div className="flex px-6 gap-7 text-sm font-base">
      <p
        onClick={() => setSelectedTab("general")}
        className={selectedTab === "general" ? activeTab : inactiveTab}
      >
        General
      </p>
      <p
        onClick={() => setSelectedTab("notification")}
        className={selectedTab === "notification" ? activeTab : inactiveTab}
      >
        Notification
      </p>
    </div>
  );
};

export default SwitchTab;
