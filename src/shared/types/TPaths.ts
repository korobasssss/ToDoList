import { IPaths } from "../interfaces";
import { EPaths } from "../enums";

export type TPaths = {
    [Key in EPaths]: IPaths;
}