export interface Countries {
    Countries: Country[];
}

export interface Country {
    States:      State[];
    CountryName: string;
}

export interface State {
    Cities:    string[];
    StateName: string;
}
