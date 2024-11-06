import { createContext, FC, ReactNode, SetStateAction, useState } from "react"

interface IFilterContext {
    filterValue: string
    setFilterValue: React.Dispatch<SetStateAction<string>>
}

interface IFilterProvider {
    children: ReactNode
}

export const FilterContext = createContext<IFilterContext | undefined>(undefined)

export const FilterProvider: FC<IFilterProvider> = (
    { 
       children 
    }
) => {
    const [filterValue, setFilterValue] = useState('');
  
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