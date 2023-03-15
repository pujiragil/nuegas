import ProfileLayout from "../../components/Layouts/ProfileLayout";
import SwitchTab from "../../components/Switch";
import dropdown from "../../assets/arrow.svg";
import { useState } from "react";
import ButtonSwitch from "../../components/Atoms/ButtonSwitch";
import useSettingStore from "../../store/settingStore";

const timezoneWrapperStyle: string =
  "cursor-pointer py-4 px-5 rounded-xl border flex items-center gap-4";

const Settings = () => {
  const selectedTab = useSettingStore((state) => state.selectedTab);

  return (
    <>
      <ProfileLayout
        titleProfile="Settings"
        background="primary"
        children={<SwitchTab />}
      />

      <div className="bg-primary-200 text-secondary-100 p-6">
        {selectedTab === "general" ? <GeneralTab /> : <NotificationTab />}
      </div>
    </>
  );
};

const GeneralTab = () => {
  const [timeZone, setTimeZone] = useState<"12 hour" | "24 hour">("24 hour");

  return (
    <div className="bg-primary-100 rounded-xl p-5 flex flex-col gap-36">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-sm">Language</p>
          <div className="font-medium text-xs flex items-center justify-between px-5 py-4 rounded-xl border border-primary-300">
            <p>English (Default)</p>
            <img
              className="w-5 h-5 object-cover"
              src={dropdown}
              alt="dropdown"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold text-sm">Timezone</p>
          <div className="font-medium text-xs flex items-center justify-between px-5 py-4 rounded-xl border border-primary-300">
            <p>English (Default)</p>
            <img
              className="w-5 h-5 object-cover"
              src={dropdown}
              alt="dropdown"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold text-sm">Timezone</p>
          <div className="flex items-center gap-4">
            <div
              onClick={() => setTimeZone("24 hour")}
              className={`${timeZone === "24 hour"
                  ? "border-tertiary-100"
                  : "border-primary-300"
                } ${timezoneWrapperStyle}`}
            >
              <p className="font-medium text-xs">24 Hours</p>
              <span
                className={`${timeZone === "24 hour"
                    ? "border-4 border-tertiary-100"
                    : "border-2 border-primary-300"
                  } w-5 h-5 rounded-full`}
              ></span>
            </div>

            <div
              onClick={() => setTimeZone("12 hour")}
              className={`${timeZone === "12 hour"
                  ? "border-tertiary-100"
                  : "border-primary-300"
                } ${timezoneWrapperStyle}`}
            >
              <p className="font-medium text-xs">12 Hours</p>
              <span
                className={`${timeZone === "12 hour"
                    ? "border-4 border-tertiary-100"
                    : "border-2 border-primary-300"
                  } w-5 h-5 rounded-full`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full py-3 rounded-xl bg-tertiary-100 text-primary-100 text-sm font-semibold">
        Save Changes
      </button>
    </div>
  );
};

const NotificationTab = () => {
  return (
    <div className="bg-primary-100 p-5 rounded-xl flex flex-col gap-36">
      <div className="flex flex-col gap-6 font-semibold text-sm text-secondary-100">
        <div className="flex items-center gap-5">
          <ButtonSwitch isActive={true} />
          <p>Message</p>
        </div>
        <div className="flex items-center gap-5">
          <ButtonSwitch isActive={false} />
          <p>Task Update</p>
        </div>
        <div className="flex items-center gap-5">
          <ButtonSwitch isActive={true} />
          <p>Task Deadline</p>
        </div>
        <div className="flex items-center gap-5">
          <ButtonSwitch isActive={false} />
          <p>Mentor Help</p>
        </div>
      </div>

      <button className="w-full py-3 rounded-xl bg-tertiary-100 text-primary-100 font-semibold text-sm">
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
