import React from 'react';
import ArtistsList from "./pages/ArtistsList/ArtistsList";
import ResponsiveAppBar from "./components/ResponsiveMenuBar";
import {ThemeProvider} from "@mui/material";
import {lightTheme} from "./lightTheme";
import ArtistPage from "./pages/ArtistPage/ArtistPage";


function App() {
  return (
    <div className="App">
        <ThemeProvider theme={lightTheme}>
            <ResponsiveAppBar/>
            {/*<ArtistsList/>*/}
            <ArtistPage/>
        </ThemeProvider>

    </div>
  );
}

export default App;
