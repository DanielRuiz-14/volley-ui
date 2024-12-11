import { Gender } from "./gender.enum";

export interface Player
    {
        firstName: string ;
        lastName: string;
        teamName: string ;
        height: number;
        weight: number;
        birthDate: Date;
        spike: number;
        block: number;
        gender: Gender;
        dni: string;
    }
