const palette = {
  subtleblue: "#f6f8fe",
  darkblue: "#2046cf",
  lightBlue: "#001b66",
  skyblue: "#a6c8e7",
  white: "#fff",
  black: "#1c252c",
  gray: "#68757d",
  lightgray: "#b4c2cb",
  subtleRed: "#fbdada",
  red: "#af2c2c",
  green: "#016601",
  greenLight: "#91ff91",
  lightblue2: "#afe5f8",
  yellowLight: "#ffed8a",
  yellowDark: "#584a04",
};

const theme = {
  colors: {
    primary: palette.darkblue,
    secondary: palette.subtleblue,
    foreground: palette.skyblue,
    white: palette.white,
    black: palette.black,
    inputBorder: palette.skyblue,
    labels: palette.gray,
    borders: palette.lightgray,
    error: palette.red,
    redStatusBg: palette.subtleRed,
    info: palette.lightblue2,
    success: palette.green,
    successBg: palette.greenLight,
    partialBg: palette.yellowLight,
    partialText: palette.yellowDark,
  },
  textVariants: {
    header: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    body: {
      fontSize: "16px",
    },
    link: {
      fontSize: "16px",
      fontWeight: "bold",
      color: palette.darkblue,
    },
  },
  spacing: {
    s: "8px",
    m: "16px",
    l: "24px",
    xl: "32px",
  },
  breakpoints: {
    sm: "575px",
    md: "800px",
    lg: "1200px",
    xl: "1440px",
  },
};

export default theme;
