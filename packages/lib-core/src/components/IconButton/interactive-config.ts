import { InteractiveIconState } from "./interactive-types";

export const interactiveIconsMap: Record<string, InteractiveIconState> = {
  favorite: {
    isActive: false,
    activeColor: "#e91e63",
    inactiveColor: "#666666",
    activeBgColor: "#fce4ec",
    inactiveBgColor: "transparent",
    activeHoverColor: "#fce4ec",
    inactiveHoverColor: "rgba(233, 30, 99, 0.12)",
    activeFillColor: "#e91e63",
    inactiveFillColor: "transparent",
    activeTooltip: "Remove from favorites",
    inactiveTooltip: "Add to favorites",
  },
  bookmark: {
    isActive: false,
    activeColor: "#ffc107",
    inactiveColor: "#666666",
    activeBgColor: "#fff8e1",
    inactiveBgColor: "transparent",
    activeHoverColor: "#fff8e1",
    inactiveHoverColor: "rgba(255, 193, 7, 0.12)",
    activeFillColor: "#ffc107",
    inactiveFillColor: "transparent",
    activeTooltip: "Remove bookmark",
    inactiveTooltip: "Add bookmark",
  },
  star: {
    isActive: false,
    activeColor: "#ff9800",
    inactiveColor: "#666666",
    activeBgColor: "#fff3e0",
    inactiveBgColor: "transparent",
    activeHoverColor: "#fff3e0",
    inactiveHoverColor: "rgba(255, 152, 0, 0.12)",
    activeFillColor: "#ff9800",
    inactiveFillColor: "transparent",
    activeTooltip: "Remove star",
    inactiveTooltip: "Add star",
  },
  like: {
    isActive: false,
    activeColor: "#e91e63",
    inactiveColor: "#666666",
    activeBgColor: "#fce4ec",
    inactiveBgColor: "transparent",
    activeHoverColor: "#fce4ec",
    inactiveHoverColor: "rgba(233, 30, 99, 0.12)",
    activeFillColor: "#e91e63",
    inactiveFillColor: "transparent",
    activeTooltip: "Unlike",
    inactiveTooltip: "Like",
  },
  follow: {
    isActive: false,
    activeColor: "#2196f3",
    inactiveColor: "#666666",
    activeBgColor: "#e3f2fd",
    inactiveBgColor: "transparent",
    activeHoverColor: "#e3f2fd",
    inactiveHoverColor: "rgba(33, 150, 243, 0.12)",
    activeFillColor: "#2196f3",
    inactiveFillColor: "transparent",
    activeTooltip: "Unfollow",
    inactiveTooltip: "Follow",
  },
};
