import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  // TODO: CHECK IF USER IS AUTHENTICATED AND IF USER IS AN ADMIN

  return <>{children}</>;
};

export default RootLayout;
