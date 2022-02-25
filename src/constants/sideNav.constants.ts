import portfolioIcon from "assets/images/portfolioIcon.svg";
import supplyMetricsIcon from "assets/images/supplyMetricsIcon.svg";
import grievacesIcon from "assets/images/grievacesIcon.svg";
import programsIcon from "assets/images/programsIcon.svg";
import settingsIcon from "assets/images/settingsIcon.svg";
import helpIcon from "assets/images/helpIcon.svg";

export const sideNavArr = [
  {
    name: "Portfolio",
    path: "/portfolio",
    iconSrc: portfolioIcon,
  },
  {
    name: "Supply Chain Metrics",
    path: "/supply-metrics",
    iconSrc: supplyMetricsIcon,
  },
  {
    name: "Grievances",
    path: "/grievances",
    iconSrc: grievacesIcon,
  },
  {
    name: "Programs",
    path: "/programs",
    iconSrc: programsIcon,
  },
];

export const additionalSideNavArr = [
  {
    name: "Settings",
    path: "/settings",
    iconSrc: settingsIcon,
  },
  {
    name: "Help",
    path: "/help",
    iconSrc: helpIcon,
  },
];
