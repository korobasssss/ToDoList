import { useDispatch } from "react-redux";
import { AppDispatchType } from "../interfaces";

export const useAppDispatch = () => useDispatch<AppDispatchType>()