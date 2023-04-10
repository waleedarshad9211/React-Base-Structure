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
        main: "#d32f2f",
        light: "#ef5350",
        dark: "#c62828",
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
        marginTop: "10px",
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
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "5px",
              background: "#FAFAFA",
              border: "1px solid #E8E8E8",
              height: "40px",
              "&:hover": {
                border: "1px solid #E8E8E8",
              },
              "&.Mui-focused": {
                border: "1px solid #E8E8E8",
              },
              "& fieldset": {
                borderColor: "#E8E8E8",
              },
              "&:hover fieldset": {
                borderColor: "#E8E8E8",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#E8E8E8",
              },
            },
          },
        },
      },

      MuiAutocomplete: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              padding: "0px 9px",
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            margin: "0px",
            justifyContent: "flex-start",
          },
          labelPlacementTop: {
            alignItems: "flex-start",
          },
          labelPlacementBottom: {
            alignItems: "flex-start",
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            padding: "6px 0px",
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            padding: "6px 0px",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            position: "sticky",
            top: -1,
            zIndex: 1,
            backgroundColor: "#f3f5f7", // replace with desired background color for TableHead
            borderTop: "0px ",
          },
          "& .MuiTableCell-head": {
            color: "#1C4588 !important", // replace with desired color for TableHead text
            fontWeight: "bold",
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            border: "1px solid rgb(223 221 221)",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: "1px solid rgb(223 221 221)",
          },
        },
      },
      MuiIcon: {
        styleOverrides: {
          root: {
            // Match 24px = 3 * 2 + 1.125 * 16
            boxSizing: "content-box",
            padding: 3,
            fontSize: "1.125rem",
          },
        },
      },
    },
    ...other,
  });

  theme = responsiveFontSizes(theme);

  return theme;
}
