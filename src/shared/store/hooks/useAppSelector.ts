import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateType } from "../types";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;