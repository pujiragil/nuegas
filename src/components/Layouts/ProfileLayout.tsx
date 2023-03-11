import { FC, ReactElement, ReactNode } from "react";
import { Head } from "../Atoms";
import ProfileNavigation from "../Profile/ProfileNavigation";

interface ProfileLayoutProps {
  titleProfile: string;
  descProfile?: string;
  children?: ReactNode;
  background?: "primary";
}

const ProfileLayout: FC<ProfileLayoutProps> = ({
  titleProfile,
  descProfile,
  children,
  background,
}): ReactElement => {
  return (
    <div
      className={`${background === "primary"
          ? "bg-primary-100"
          : "bg-primary-100 md:bg-primary-200"
        } flex flex-col gap-8 border-b border-primary-300 md:p-8 md:gap-6 md:border-none`}
    >
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between md:items-center">
        <div
          className={`${children ? null : "pb-8"
            } px-6 space-y-2 order-2 md:order-1 md:p-0`}
        >
          <Head
            type="h1"
            fontSize={"text-2xl"}
            fontWeight="font-semibold"
            value={titleProfile}
          />
          {descProfile && (
            <p className="font-medium text-secondary-200">{descProfile}</p>
          )}
        </div>

        <ProfileNavigation />
      </div>

      {children}
    </div>
  );
};

export default ProfileLayout;
