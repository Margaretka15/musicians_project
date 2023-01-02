import React from 'react';
import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("artists");
    }
    return (
        <div>
            <Typography>Zaczynajmy! </Typography>
            <Button onClick={handleClick} variant="outlined">Przeglądaj ogłoszenia</Button>
        </div>
    );
}

export default MainPage;