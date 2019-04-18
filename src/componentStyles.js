export const switchStyle = {
  colorSwitchBase: {
    color: "#0077ff",
    "&$colorChecked": {
      color: "yellow",
      "& + $colorBar": {
        backgroundColor: "yellow"
      }
    }
  },
  colorBar: { backgroundColor: "#0077ff" },
  colorChecked: {}
};
