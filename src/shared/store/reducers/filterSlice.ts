import { EOptionCategory, EOptionTask } from "@/shared/enums";
import { ISelectOptions } from "@/shared/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
    searchValue: string;
    filterValue: ISelectOptions<EOptionTask | EOptionCategory, string> | null
}

const initialState: IFilterState = {
  searchValue: '',
  filterValue: null
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      setSearchValue: (state, action: PayloadAction<string>) => {
        state.searchValue = action.payload;
      },
      setFilterValue: (state, action: PayloadAction<ISelectOptions<EOptionTask | EOptionCategory, string> | null>) => {
        state.filterValue = action.payload;
      }
    },
  });

export const { setSearchValue, setFilterValue} = filterSlice.actions;