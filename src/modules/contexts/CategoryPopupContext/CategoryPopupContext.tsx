import { createContext } from "react";
import { IPopupContext } from "../../interfaces";

export const CategoryPopupContext = createContext<IPopupContext | undefined>(undefined)