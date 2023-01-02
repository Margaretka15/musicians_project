import { createTheme } from "@mui/material/styles";
import {responsiveFontSizes} from "@mui/material";

let  theme = createTheme( {
    palette: {
        primary: {
            main: '#830077',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#fafafa',
        }
    },
    typography: {
        fontFamily: 'Roboto',
        h1: {
           fontSize: '4rem'
        },

    },
});
export const lightTheme = responsiveFontSizes(theme);
