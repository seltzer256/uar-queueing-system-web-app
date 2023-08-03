import ViewModuleIcon from "@mui/icons-material/ViewModule";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const NOT_ALLOWED_HTML_ATTRS = [
  `contenteditable="false"`,
  `contenteditable="true"`,
];

export const USER_ID = "userId";

export const SIDEBAR_ITEMS = {
  DASHBOARD: {
    name: "Dashboard",
    value: "dashboard",
    icon: <DashboardIcon />,
    onlyAdmin: true,
  },
  USERS: {
    name: "Usuarios",
    value: "users",
    icon: <SupervisedUserCircleIcon />,
    onlyAdmin: true,
  },
  MODULES: {
    name: "Módulos",
    value: "modules",
    icon: <ViewModuleIcon />,
    onlyAdmin: true,
  },
  SERVICES: {
    name: "Servicios",
    value: "services",
    icon: <MiscellaneousServicesIcon />,
    onlyAdmin: true,
  },
  SHIFTS: {
    name: "Turnos",
    value: "shifts",
    icon: <FormatListNumberedIcon />,
  },
};

export const SHIFT_STATUS = {
  ON_HOLD: "on-hold",
  IN_PROGRESS: "in-progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export const AVATAR_URLS = {
  AVATAR_1: "/assets/avatars/avatar_1.png",
  AVATAR_2: "/assets/avatars/avatar_2.png",
  AVATAR_3: "/assets/avatars/avatar_3.png",
  AVATAR_4: "/assets/avatars/avatar_4.png",
  AVATAR_5: "/assets/avatars/avatar_5.png",
  AVATAR_6: "/assets/avatars/avatar_6.png",
  AVATAR_7: "/assets/avatars/avatar_7.png",
  AVATAR_8: "/assets/avatars/avatar_8.png",
  AVATAR_9: "/assets/avatars/avatar_9.png",
  AVATAR_10: "/assets/avatars/avatar_10.png",
  AVATAR_11: "/assets/avatars/avatar_11.png",
  AVATAR_12: "/assets/avatars/avatar_12.png",
  AVATAR_13: "/assets/avatars/avatar_13.png",
  AVATAR_14: "/assets/avatars/avatar_14.png",
  AVATAR_15: "/assets/avatars/avatar_15.png",
  AVATAR_16: "/assets/avatars/avatar_16.png",
};
