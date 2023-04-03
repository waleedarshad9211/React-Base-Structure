import { createTheme, responsiveFontSizes } from "@mui/material";

export function createCustomTheme(options = {}) {
  const {
    palette = {
      common: {
        black: "#000",
        white: "#fff",
      },
      mode: "light",
      primary: {
        main: "#1C4588",
        light: "#4C73B2",
        dark: "rgb(17, 82, 147)",
        contrastText: "#fff",
      },
      secondary: {
        main: "#5ec4b2",
        light: "rgb(255, 85, 166)",
        dark: "rgb(178, 0, 81)",
        contrastText: "#fff",
      },
      error: {
        main: "#f44336",
        light: "rgb(246, 104, 94)",
        dark: "rgb(170, 46, 37)",
        contrastText: "#fff",
      },
      warning: {
        main: "#ff9800",
        light: "rgb(255, 200, 117)",
        dark: "rgb(178, 122, 0)",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      info: {
        main: "#2196f3",
        light: "rgb(71, 145, 219)",
        dark: "rgb(17, 82, 147)",
        contrastText: "#fff",
      },
      success: {
        main: "#4caf50",
        light: "rgb(111, 207, 151)",
        dark: "rgb(53, 122, 63)",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      text: {
        primary: "#666666",
        secondary: "#222222",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)",
      },
      background: {
        paper: "#fff",
        default: "#F8FAFB",
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(0, 0, 0, 0.14)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
    typography = {
      fontFamily: "Quicksand,Roboto, sans-serif",
      h1: {
        fontWeight: 600,
        fontSize: "2.75rem",
        lineHeight: 1,
        color: palette.primary.main,
      },
      h2: {
        fontWeight: 700,
        fontSize: "2rem",
        lineHeight: 1,
        color: palette.text.primary,
      },
      h3: {
        fontWeight: 700,
        fontSize: "1.2rem",
        lineHeight: 1,
        color: palette.text.primary,
      },
      h4: {
        fontWeight: 700,
        fontSize: "1.1rem",
        lineHeight: 1,
        color: palette.primary.main,
      },
      h5: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: 1.2,
      },
      h6: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: 1.2,
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },
      body1: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: 1,
        color: palette.text.primary,
      },
      body2: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1,
        color: palette.text.primary,
      },

      button: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: 1,
      },
      caption: {
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 1.5,
      },
      overline: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },
    },
    shape = {
      borderRadius: 8,
    },

    ...other
  } = options;

  let theme = createTheme({
    palette,
    typography,
    shape,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            borderRadius: "5px",
            boxShadow: "0pc 3px 6px #00000029",
            height: "40px",
          },
          containedSecondary: {
            "&:hover": {
              backgroundColor: palette.secondary.main, // new hover color for secondary button
            },
          },
        },
      },
    },
    ...other,
  });

  theme = responsiveFontSizes(theme);

  return theme;
}
