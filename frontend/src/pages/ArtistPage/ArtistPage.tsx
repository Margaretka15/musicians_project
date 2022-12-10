import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Typography, useTheme} from "@mui/material";
import "./ArtisPage.scss";
import {lightTheme} from "../../lightTheme";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useSearchParams} from "react-router-dom";

type Props = {}
const photoUrl = 'https://media.istockphoto.com/id/532958977/photo/young-african-american-woman-smiling-and-looking-up.jpg?s=170667a&w=0&k=20&c=32gJYMVf2JrTA997WBfNI6iYZnRY3PpO7Z9yQZmS4c4=';
const backgroundImageUrl = 'https://images.unsplash.com/photo-1571974599782-87624638275e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwcGlhbm98ZW58MHx8MHx8&w=1000&q=80';

const descriptionShort = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet lacus libero. ' +
    'Donec eget urna nec elit sollicitudin imperdiet. Suspendisse rutrum lacus ' +
    'vitae dui sodales feugiat. Nunc euismod sed sem a dictum. ';

const descriptionLong = 'Aliquam ut justo sodales, vestibulum lacus at, aliquet lorem. ' +
    'Phasellus ultricies ex at lorem auctor sodales. Aliquam ornare, metus in lobortis suscipit, ' +
    'lectus sem posuere elit, sed posuere mauris eros in mi. Nam posuere condimentum convallis. In hac ' +
    'habitasse platea dictumst. Ut sagittis nulla mauris, quis pellentesque lacus finibus vel. Suspendisse ' +
    'maximus ultrices risus eu rhoncus. Aliquam efficitur varius dui, eget ultricies mi laoreet ut. Integer et ' +
    'lacinia erat. Cras vitae risus tincidunt, pretium libero tempor, malesuada sapien. ' +
    'Aenean tempus tortor magna, at malesuada diam aliquet et.'

const name = "Joanna";
const lastname = "Kruczek";

const phoneNumber = "999-999-888";


function ArtistPage() {

    const theme = useTheme();

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    return (
        <div>
            <Typography variant="h1">{name} {lastname}</Typography>
            <div className="wrapper">

                <div className="main-section">

                    <div className="main-section__about">

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    <Typography variant="h5">O mnie</Typography>
                                    <Typography variant="body1"> Ten artysta ma takie id: {id} {descriptionShort}</Typography></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">{descriptionLong}</Typography>
                            </AccordionDetails>
                        </Accordion>


                    </div>
                </div>

                <div style={{backgroundColor: theme.palette.background.default}} className="side-section">
                    <div className={"side-section__avatar"}>
                        <Avatar
                            alt={`${name} ${lastname}`}
                            src={photoUrl}
                            sx={{width: 250, height: 250}}
                        />
                    </div>

                    <div className="side-section__details">
                        Napisz do mnie!
                        <Typography>{phoneNumber}</Typography>
                        <p>dddd</p>
                        <p>fff</p>
                    </div>
                </div>

            </div>
        </div>

    );


}

export default ArtistPage;