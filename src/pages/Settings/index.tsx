import ProfileLayout from "../../components/Layouts/ProfileLayout";
import SwitchTab from "../../components/Switch";
import dropdown from "../../assets/arrow.svg";

const Settings = () => {
  return (
    <>
      <ProfileLayout
        titleProfile="Settings"
        background="primary"
        children={<SwitchTab />}
      />

      <div className="bg-primary-200 text-secondary-100 p-6">
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
                <div className="py-4 px-5 rounded-xl border border-tertiary-100 flex items-center gap-4">
                  <p className="font-medium text-xs">24 Hours</p>
                  <span className="w-5 h-5 rounded-full border-4 border-tertiary-100"></span>
                </div>
                <div className="py-4 px-5 rounded-xl border border-primary-300 flex items-center gap-4">
                  <p className="font-medium text-xs">12 Hours</p>
                  <span className="w-5 h-5 rounded-full border-2 border-primary-300"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
