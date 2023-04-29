import {createTheme, css} from "@mui/material";


export const theme = createTheme({
    palette: {
        mode: 'light',
        border: '#E7EBF0',
        alternative: '#f3f6f9',
        primary: {
            main: '#007FFF'
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                fontFamily: `"Plus Jakarta Sans", sans-serif`
            }
        },
        MuiButton: {
            defaultProps: {
                variant: "contained"
            },
            variants: [
                {
                    props: { variant: "contained" },
                    style: css`
                      text-transform: none;
                      box-shadow: none;
                      border-radius: 10px;
                      padding: 10px 20px 10px 20px;
                      font-weight: bold;
                    `
                }
            ]
        }
    }
});
