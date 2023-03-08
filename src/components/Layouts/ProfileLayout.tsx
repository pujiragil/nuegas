import { FC, ReactElement, ReactNode } from "react";
import ProfileNavigation from "../Profile/ProfileNavigation";

interface ProfileLayoutProps {
  titleProfile: string;
  descProfile?: string;
  children?: ReactNode;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({
  titleProfile,
  descProfile,
  children,
}): ReactElement => {
  return (
    <div className="bg-primary-100 flex flex-col gap-8 border-b border-primary-300 md:bg-primary-200 md:p-8 md:gap-6 md:border-none">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between md:items-center">
        <div className={`${children ? null : "pb-8"} px-6 space-y-2 order-2 md:order-1 md:p-0`}>
          <h1 className="text-secondary-100 font-semibold text-2xl">
            {titleProfile}
          </h1>
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
