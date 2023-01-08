declare module "@mui/material" {
  interface TypographyPropsVariantOverrides {
    navtitle: true;
    maintext: true;
    subtext1: true;
    maintext1: true;
    maintext2: true;
    product_main_text: true;
  }
}
const typography = {
  fontFamily: ["Futura Regular", "Arial", "sans-serif"].join(","),
  h4: {
    fontFamily: ["Ginger", "Arial", "sans-serif"].join(","),
    fontWeight: 500,
  },
  h5: {
    fontFamily: ["Ginger", "Arial", "sans-serif"].join(","),
    fontWeight: 500,
  },
  navtitle: {
    fontFamily: ["Ginger", "Arial", "sans-serif"].join(","),
    fontWeight: 500,
    fontSize: "1.2rem",
    display: "block",
  },
  maintext: {
    fontFamily: ["Ginger", "Arial", "sans-serif"].join(","),
    fontWeight: 500,
    fontSize: "1.5rem",
  },
  subtext1: {
    fontFamily: ["Ginger", "Arial", "sans-serif"].join(","),
    fontWeight: "700",
    fontSize: "1.3rem",
  },
  maintext1: {
    fontFamily: ["Ginger", "Arial", "sans-serif"].join(","),
    fontWeight: 500,
    fontSize: "3rem",
    display: "block",
  },
  maintext2: {
    fontFamily: ["Ginger", "Arial", "sans-serif"].join(","),
    fontWeight: 500,
    fontSize: "2.5rem",
    display: "block",
  },
  button: {
    letterSpacing: "0.05em",
  },
  product_main_text: {
    fontFamily: ["Ginger", "Arial", "sans-serif"].join(","),
    fontWeight: 500,
    fontSize: "1.3rem",
    display: "block",
  },
  letterSpacing: "0.05em",
};

export default typography;
