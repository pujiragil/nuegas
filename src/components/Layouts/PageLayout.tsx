import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageProps) => {
  return <main className="p-8 w-full">{children}</main>;
};

export default PageLayout;
