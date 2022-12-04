import React from "react";

import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

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
            </ListItem>
            <Divider variant="inset" component="li"/>

        </>

    )

}

export default ArtistItem;