import { UserDetailArrT } from "model/user.model";

export const ADMIN = "admin";
export const CONFIG_LEAD = "config-lead";
export const DATA_INPUTTER = "data-inputter";
export const DATA_APPROVER = "data-approver";
export const SUPPLIER = "supplier";
export const CUSTOMER = "customer";
export const AUTHOR = "author";

export const userDetailsArr: UserDetailArrT = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "SustainIt@2022",
    passwordUpdateDate: "January 1, 2022",
    name: "Léa Yue Xu",
    company: "LDC",
    jobTitle: "Super User",
    mobile: 9876543210,
    role: [ADMIN],
    isFirstTimeConfig: false,
    isFirstTimeLogin: true,
  },
  {
    id: 2,
    email: "config-lead@gmail.com",
    password: "SustainIt@2022",
    passwordUpdateDate: "January 1, 2022",
    name: "Harish Rajagopal",
    company: "Cargill",
    jobTitle: "Config Lead",
    mobile: 8765432109,
    role: [CONFIG_LEAD],
    isFirstTimeConfig: true,
    isFirstTimeLogin: false,
  },
  {
    id: 3,
    email: "data-inputter@gmail.com",
    password: "SustainIt@2022",
    passwordUpdateDate: "January 1, 2022",
    name: "Ragu Muthuramalingam",
    company: "Cargill",
    jobTitle: "Data Input",
    mobile: 7654321098,
    role: [DATA_INPUTTER],
    isFirstTimeConfig: false,
    isFirstTimeLogin: true,
  },
  {
    id: 4,
    email: "supplier@gmail.com",
    password: "SustainIt@2022",
    passwordUpdateDate: "January 1, 2022",
    name: "Maia Giorgadze",
    company: "Cargill",
    jobTitle: "Supplier",
    mobile: 6543127890,
    role: [SUPPLIER],
    isFirstTimeConfig: false,
    isFirstTimeLogin: false,
  },
  {
    id: 5,
    email: "customer@gmail.com",
    password: "SustainIt@2022",
    passwordUpdateDate: "January 1, 2022",
    name: "Pavithra Muthumanickam",
    company: "Cargill",
    jobTitle: "Customer",
    mobile: 5431267890,
    role: [CUSTOMER],
    isFirstTimeConfig: false,
    isFirstTimeLogin: false,
  },
  {
    id: 6,
    email: "author@gmail.com",
    password: "SustainIt@2022",
    passwordUpdateDate: "January 1, 2022",
    name: "Vishal Grover",
    company: "Cargill",
    jobTitle: "Author",
    mobile: 5431267890,
    role: [AUTHOR],
    isFirstTimeConfig: false,
    isFirstTimeLogin: false,
  },
];
