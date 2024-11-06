import { createContext, FC, ReactNode, SetStateAction, useState } from "react"

interface ISearchContext {
    searchValue: string
    setSearchValue: React.Dispatch<SetStateAction<string>>
}

interface ISearchProvider {
    children: ReactNode
}

export const SearchContext = createContext<ISearchContext | undefined>(undefined)

export const SearchProvider: FC<ISearchProvider> = (
    { 
       children 
    }
) => {
    const [searchValue, setSearchValue] = useState('');
  
    return (
      <SearchContext.Provider 
        value={
                { 
                    searchValue, 
                    setSearchValue 
                }
            }>
        {children}
      </SearchContext.Provider>
    );
};