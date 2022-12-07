import React from 'react';
import ArtistsList from "./pages/ArtistsList/ArtistsList";
import ResponsiveAppBar from "./components/ResponsiveMenuBar";


function App() {
  return (
    <div className="App">
     <ResponsiveAppBar/>
        <ArtistsList/>
    </div>
  );
}

export default App;
