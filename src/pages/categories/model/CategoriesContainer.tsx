import { useEffect, useState } from "react"
import { MainLayout } from "@/shared/ui/MainLayout"
import { CategoriesComponent } from "../ui/CategoriesComponent"
import { fetchCategoriesApi } from "@/shared/api"
import { CreateCategoryPopupContainer } from "@/widgets/CategoryPopup"
import { ICategory } from "@/shared/interfaces"
import { useSearchContext } from "@/app/hooks"

export const CategoriesContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const {data: categories, isLoading} = fetchCategoriesApi.useFetchGetCategoriesQuery()
    const [searchCategories, setSearchCategories] = useState<ICategory[] | null>(null);
    const { searchValue } = useSearchContext();

    useEffect(() => {
        if (categories) {
            if (searchValue === '') {
                setSearchCategories(categories);
            } else {
                setSearchCategories(
                    categories.filter(category => category.name.includes(searchValue) || category.description?.includes(searchValue)
                ));
            }
        }
    }, [categories, searchValue]);

    return (
        <>
            <MainLayout
                title='ToDo List'
                buttonName='Добавить категорию'
                isLoading={isLoading}
                handleButtonClick={setIsPopupOpen}
            > 
                <CategoriesComponent
                    categories={searchCategories}
                />
                <CreateCategoryPopupContainer
                        isPopupOpen={isPopupOpen}
                        handleIsPopupOpen={setIsPopupOpen}
                />
            </MainLayout>
        </>
    )
}