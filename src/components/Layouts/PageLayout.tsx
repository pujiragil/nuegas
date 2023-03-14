import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageProps) => {
  return (
    <main className="w-full bg-primary-100 md:bg-primary-200">
      {children}
    </main>
  );
};

export default PageLayout;
