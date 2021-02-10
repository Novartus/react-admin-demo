export const darkTheme = {
  palette: {
    type: "dark",
  },
  overrides: {
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: "#424242", //'#1e4c9a',
        color: "#fff",
      },
    },
    MuiButton: {
      textPrimary: {
        color: "#fff",
      },
    },
    MuiTypography: {
      colorPrimary: {
        color: "#fff",
      },
    },
    MuiDrawer: {
      paper: {
        paddingTop: "20px",
      },
    },
    MuiFilledInput: {
      underline: {
        "&:after": {
          borderBottomColor: "#bf9f00",
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#bf9f00",
        },
      },
    },
  },
};
