import ProfileLayout from "../../components/Layouts/ProfileLayout";
import { SwitchTab, SwitchNotification } from "../../components/Switch";
import dropdown from "../../assets/arrow.svg";
import { useCallback, useState } from "react";
import useSettingStore, {
  NotificationSlice,
  GeneralSlice,
  Language,
  TimeZone,
} from "../../store/settingStore";
import { shallow } from "zustand/shallow";
import { SelectDropdown } from "../../components/Field";

const timezoneWrapperStyle: string =
  "cursor-pointer py-4 px-5 rounded-xl border flex items-center gap-4 md:w-full md:gap-0 md:justify-between transition-all duration-300 ease-in-out";
const dropdownStyle: string =
  "cursor-pointer font-medium text-xs flex items-center justify-between px-5 py-4 rounded-xl border border-primary-300 hover:bg-primary-300 transition-all duration-300 ease-in-out";
const dropdownArrowStyle: string =
  "transition-all duration-200 ease-in w-5 h-5 object-cover";
const buttonStyle: string =
  "w-full py-3 rounded-xl bg-tertiary-100 text-primary-100 text-sm font-semibold md:w-2/6";

const Settings = () => {
  const selectedTab = useSettingStore((state) => state.selectedTab);

  return (
    <>
      <ProfileLayout
        titleProfile="Settings"
        background="primary"
        children={<SwitchTab screenDisplay="md:hidden" />}
      />

      <div className="bg-primary-200 text-secondary-100 p-6">
        <div className="bg-primary-100 flex flex-col gap-8 p-5 rounded-xl md:p-8">
          <SwitchTab screenDisplay="hidden md:flex md:p-0 border-b border-primary-300" />
          {selectedTab === "general" ? <GeneralTab /> : <NotificationTab />}
        </div>
      </div>
    </>
  );
};

type Select = "language" | "timezone" | "default";

const languages: Language[] = ["English", "Indonesian", "Javanese"];
const timeZones: TimeZone[] = languages;

const GeneralTab = () => {
  const [generalStore, setGeneralStore] = useSettingStore(
    (state) => [state.general, state.setGeneral],
    shallow
  );
  const [general, setGeneral] = useState<GeneralSlice["general"]>(generalStore);
  const [isSelect, setIsSelect] = useState<Select>("default");

  const handleLanguage = (language: Language) => {
    setGeneral((prevGeneral) => ({ ...prevGeneral, language }));
    setIsSelect("default");
  };

  const handleTimeZone = (timeZone: TimeZone) => {
    setGeneral((prevGeneral) => ({ ...prevGeneral, timeZone }));
    setIsSelect("default");
  };

  return (
    <div className="flex flex-col gap-36 md:gap-16">
      <div className="flex flex-col gap-6 md:w-2/6">
        <div className="flex flex-col gap-4 relative">
          <p className="font-semibold text-sm">Language</p>
          <div
            onClick={() =>
              setIsSelect((prevSelect) =>
                prevSelect === "default" || prevSelect === "timezone"
                  ? "language"
                  : "default"
              )
            }
            className={dropdownStyle}
          >
            <p>{general.language}</p>
            <img
              className={`${isSelect === "language" ? "rotate-180" : "rotate-0"
                } ${dropdownArrowStyle}`}
              src={dropdown}
              alt="dropdown"
            />
          </div>

          {isSelect === "language" && (
            <SelectDropdown lists={languages} onSelect={handleLanguage} />
          )}
        </div>

        <div className="flex flex-col gap-4 relative">
          <p className="font-semibold text-sm">Timezone</p>
          <div
            onClick={() =>
              setIsSelect((prevSelect) =>
                prevSelect === "default" || prevSelect === "language"
                  ? "timezone"
                  : "default"
              )
            }
            className={dropdownStyle}
          >
            <p>{general.timeZone}</p>
            <img
              className={`${isSelect === "timezone" ? "rotate-180" : "rotate-0"
                } ${dropdownArrowStyle}`}
              src={dropdown}
              alt="dropdown"
            />
          </div>
          {isSelect === "timezone" && (
            <SelectDropdown lists={timeZones} onSelect={handleTimeZone} />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold text-sm">Timezone</p>
          <div className="flex items-center gap-4 md:gap-8">
            <div
              onClick={() =>
                setGeneral((prevGeneral) => ({
                  ...prevGeneral,
                  timeZoneType: "24 hour",
                }))
              }
              className={`${general.timeZoneType === "24 hour"
                  ? "border-tertiary-100"
                  : "border-primary-300"
                } ${timezoneWrapperStyle}`}
            >
              <p className="font-medium text-xs">24 Hours</p>
              <span
                className={`${general.timeZoneType === "24 hour"
                    ? "border-4 border-tertiary-100"
                    : "border-2 border-primary-300"
                  } w-5 h-5 rounded-full transition-all duration-200 ease-in`}
              ></span>
            </div>

            <div
              onClick={() =>
                setGeneral((prevGeneral) => ({
                  ...prevGeneral,
                  timeZoneType: "12 hour",
                }))
              }
              className={`${general.timeZoneType === "12 hour"
                  ? "border-tertiary-100"
                  : "border-primary-300"
                } ${timezoneWrapperStyle}`}
            >
              <p className="font-medium text-xs">12 Hours</p>
              <span
                className={`${general.timeZoneType === "12 hour"
                    ? "border-4 border-tertiary-100"
                    : "border-2 border-primary-300"
                  } w-5 h-5 rounded-full transition-all duration-200 ease-in`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <button className={buttonStyle}>Save Changes</button>
    </div>
  );
};

const NotificationTab = (): JSX.Element => {
  const [notificationStore, setNotificationStore] = useSettingStore(
    (state) => [state.notification, state.setNotification],
    shallow
  );
  const [notification, setNotification] =
    useState<NotificationSlice["notification"]>(notificationStore);

  const handleNotification = useCallback(
    (name: keyof NotificationSlice["notification"]) => {
      setNotification((prevNotification) => ({
        ...prevNotification,
        [name]: !prevNotification[name],
      }));
    },
    [setNotification]
  );

  const handleSavedChanges = (): void => {
    setNotificationStore(notification);
    alert("Saved Changes");
  };

  return (
    <div className="flex flex-col gap-36 md:gap-16">
      <div className="flex flex-col gap-6 font-semibold text-sm text-secondary-100 md:w-2/6">
        <SwitchNotification
          isActive={notification.message}
          setIsActive={() => handleNotification("message")}
          label="Message"
        />
        <SwitchNotification
          isActive={notification.taskUpdate}
          setIsActive={() => handleNotification("taskUpdate")}
          label="Task Update"
        />
        <SwitchNotification
          isActive={notification.taskDeadline}
          setIsActive={() => handleNotification("taskDeadline")}
          label="Task Deadline"
        />
        <SwitchNotification
          isActive={notification.mentorHelp}
          setIsActive={() => handleNotification("mentorHelp")}
          label="Mentor Help"
        />
      </div>
      <button onClick={handleSavedChanges} className={buttonStyle}>
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
