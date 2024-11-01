import { EPaths } from "../enums";

interface IPaths {
    title: string,
    url: string
}

export type TPaths = {
    [Key in EPaths]: IPaths;
}