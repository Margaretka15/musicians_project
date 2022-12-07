import React from 'react';
import ArtistsList from "./pages/ArtistsList/ArtistsList";
import ResponsiveAppBar from "./components/ResponsiveMenuBar";
import {ThemeProvider} from "@mui/material";
import {lightTheme} from "./lightTheme";


function App() {
  return (
    <div className="App">
        <ThemeProvider theme={lightTheme}>
            <ResponsiveAppBar/>
            <ArtistsList/>
        </ThemeProvider>

    </div>
  );
}

export default App;
