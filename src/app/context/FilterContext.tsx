import { ISelectOptions } from "@/shared/interfaces"
import { createContext, FC, ReactNode, SetStateAction, useState } from "react"

interface IFilterContext<V extends string | number, K extends string> {
    filterValue: ISelectOptions<V, K> | null
    setFilterValue: React.Dispatch<SetStateAction<ISelectOptions<V, K> | null>>
}

interface IFilterProvider {
    children: ReactNode
}

export const FilterContext = createContext<IFilterContext<string, string> | undefined>(undefined)

export const FilterProvider: FC<IFilterProvider> = (
    { 
       children 
    }
) => {
    const [filterValue, setFilterValue] = useState<ISelectOptions<string, string> | null>(null);
  
    return (
      <FilterContext.Provider 
        value={
                { 
                    filterValue,
                    setFilterValue 
                }
            }>
        {children}
      </FilterContext.Provider>
    );
};