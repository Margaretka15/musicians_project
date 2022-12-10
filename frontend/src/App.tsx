import React from 'react';
import ArtistsList from "./pages/ArtistsList/ArtistsList";
import ResponsiveAppBar from "./components/ResponsiveMenuBar";
import {ThemeProvider} from "@mui/material";
import {lightTheme} from "./lightTheme";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";



function App() {
    return (
        <div className="App">
            <ThemeProvider theme={lightTheme}>

                <BrowserRouter>
                    <ResponsiveAppBar/>
                    <Routes>
                        <Route index element={<MainPage/>}/>
                        <Route path="/artists" element={<ArtistsList/>}/>
                        <Route path="/artist" element={<ArtistPage/>}/>
                    </Routes>

                </BrowserRouter>

                {/*<ArtistsList/>*/}
                {/*<ArtistPage/>*/}
            </ThemeProvider>

        </div>
);
}

export default App;
