type ErrorObj = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

export type ErrorProps = {
  [key: string]: ErrorObj;
};
