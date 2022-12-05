import React, {useEffect, useState} from "react";
import IArtist from "../../interface/IArtist";
import UsersService from "../../services/UsersService";
import ArtistItem from "./ArtistItem";
import {CircularProgress, List} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {styled, alpha} from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';


function ArtistsList() {
    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

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
                <List sx={{width: '100%', bgcolor: 'background.paper'}}>

                    {listItems.map((a) =>
                        <ArtistItem id={a.id}
                                    key={a.id}
                                    name={a.name}
                                    lastname={a.lastname}
                                    localisation={a.localisation}
                                    mainInstrument={a.mainInstrument}
                                    description={a.description}/>
                    )}


                </List>
            }
        </>

        // <div>
        // {/*{listItems.map((a) => <ArtistItem={a} />)}*/}

        // </div>
    )
}


export default ArtistsList;