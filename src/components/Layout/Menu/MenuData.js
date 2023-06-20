import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const MenuData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <BsIcons.BsRocketTakeoff size={20} />,
  },
  {
    title: "Sales & Payments",
    path: "#",
    icon: <AiIcons.AiOutlineCreditCard size={20} />,
    iconClosed: <MdIcons.MdKeyboardArrowDown size={20} />,
    iconOpened: <MdIcons.MdKeyboardArrowUp size={20} />,
    subNav: [
      { title: "Invoices", path: "/invoices" },
      { title: "Recurring Invoices", path: "/recurring-invoices" },
      { title: "Customers", path: "/customers" },
    ],
  },
  {
    title: "Purchases",
    path: "#",
    icon: <BsIcons.BsReceipt size={20} />,
    iconClosed: <MdIcons.MdKeyboardArrowDown size={20} />,
    iconOpened: <MdIcons.MdKeyboardArrowUp size={20} />,
    subNav: [
      { title: "Bills", path: "/purchases/bills" },
      { title: "Vendors", path: "/purchases/vendors" },
    ],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <AiIcons.AiOutlineSetting size={20} />,
  },
];