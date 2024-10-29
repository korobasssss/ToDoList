import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateType } from "../interfaces";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;