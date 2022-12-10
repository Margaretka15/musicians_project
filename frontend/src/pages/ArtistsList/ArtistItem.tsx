import React from "react";

import {
    Avatar,
    Button,
    Divider,
    ImageListItem, Link,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";

import {Link as RouterLink} from "react-router-dom";

type Props = {
    id: string;
    name: string;
    lastname: string;
    description: string;
    mainInstrument: string;
    localisation: string;
    // img: string | "";
}

function ArtistItem({id, name, lastname, mainInstrument, description}: Props): JSX.Element {


    return (
        <>
            <ListItem key={id} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={name} src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    primary={`${name} ${lastname}`}
                    secondary={
                        <>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {mainInstrument}
                            </Typography>
                            {description}
                        </>
                    }
                />
                {/*<ImageListItem>*/}
                {/*    <ImageListItem sx={{width: 100}}>*/}
                {/*        <img src="https://www.superprof.pl/blog/wp-content/uploads/2021/04/pianino-i-swiatelka.jpg"*/}
                {/*             alt=""/>*/}
                {/*    </ImageListItem>*/}
                {/*</ImageListItem>*/}

                <Button color='primary' variant='contained'>
                    {/*<RouterLink to={`/artist?id=${id}`}>Sprawdź</RouterLink>*/}
                    <Link style={{ textDecoration: 'none' }} color={"#fff"} component={RouterLink} to={`/artist?id=${id}`} >
                        Sprawdź
                    </Link>
                </Button>

            </ListItem>
            <Divider variant="inset" component="li"/>

        </>

    )

}

export default ArtistItem;