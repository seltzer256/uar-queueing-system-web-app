import ViewModuleIcon from "@mui/icons-material/ViewModule";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

export const NOT_ALLOWED_HTML_ATTRS = [
  `contenteditable="false"`,
  `contenteditable="true"`,
];

export const USER_ID = "userId";

export const SIDEBAR_ITEMS = {
  MODULES: {
    name: "Módulos",
    value: "modules",
    icon: <ViewModuleIcon />,
  },
  SERVICES: {
    name: "Servicios",
    value: "services",
    icon: <MiscellaneousServicesIcon />,
  },
  SHIFTS: {
    name: "Turnos",
    value: "shifts",
    icon: <FormatListNumberedIcon />,
  },
};
