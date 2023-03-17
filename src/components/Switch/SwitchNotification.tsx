import ButtonSwitch from "../Atoms/ButtonSwitch";

interface SwitchNotificationProps {
  isActive: boolean;
  setIsActive: () => void;
  label: string;
}

const SwitchNotification = ({
  isActive,
  setIsActive,
  label,
}: SwitchNotificationProps): JSX.Element => {
  return (
    <div
      onClick={setIsActive}
      className="flex items-center gap-5 w-fit cursor-pointer"
    >
      <ButtonSwitch isActive={isActive} />
      <p>{label}</p>
    </div>
  );
};

export default SwitchNotification;
