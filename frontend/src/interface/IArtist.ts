interface IArtist {
    id: string;
    name: string;
    lastname: string;
    description: string;
    mainInstrument: string;
    otherInstruments: string[] | string;
    localisation: string;
}

export default IArtist;
