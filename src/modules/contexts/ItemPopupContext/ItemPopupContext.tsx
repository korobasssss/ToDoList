import { createContext } from "react";
import { IPopupContext } from "../../interfaces";
import { ISelectOptions } from "../../../base/interfaces";

interface IItemPopupContext
extends IPopupContext {
    input_category: ISelectOptions | null
    handleSetInputCategory: (input_category: ISelectOptions) => void
}

export const ItemPopupContext = createContext<IItemPopupContext | undefined>(undefined)