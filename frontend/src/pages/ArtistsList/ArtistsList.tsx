import React, {useEffect, useState} from "react";
import IArtist from "../../interface/IArtist";
import UsersService from "../../services/UsersService";
import ArtistItem from "./ArtistItem";
import {CircularProgress, List} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import {Search, SearchIconWrapper, StyledInputBase} from "../../components/Search";


function ArtistsList() {


    const [listItems, setListItems] = useState(Array<IArtist>);
    const [isLoading, setIsLoading] = useState(true);

    const handleData = (artists: IArtist[]) => {
        setListItems(artists);
        setIsLoading(false);
    }
    useEffect(() => {
        UsersService.getUsers().then((response) => {
            handleData(response.data);
        }).catch(error => console.log(error));

    }, [])
    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                />
            </Search>

            {isLoading ? <CircularProgress/> :
                <List sx={{width: '60%', backgroundColor: 'background.paper'}}>

                    {listItems.map((a) =>
                        <ArtistItem id={a.id}
                                    key={a.id}
                                    name={a.name}
                                    lastname={a.lastname}
                                    localisation={a.localisation}
                                    mainInstrument={a.mainInstrument}
                                    description={a.description}
                                    isHighlighted={a.isHighlighted}/>
                    )}

                </List>
            }
        </>

    )
}


export default ArtistsList;