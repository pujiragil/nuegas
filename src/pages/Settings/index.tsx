import ProfileLayout from "../../components/Layouts/ProfileLayout";
import SwitchTab from "../../components/Switch";

const Settings = () => {
  return (
    <>
      <ProfileLayout titleProfile="Settings" children={<SwitchTab />} />
    </>
  );
};

export default Settings;
