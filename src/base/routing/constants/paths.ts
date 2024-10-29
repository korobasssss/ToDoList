import { EPaths } from "../../enums";
import { TPaths } from "../../types";

export const PATHS : TPaths = {
    [EPaths.MAIN]: {
        title: 'Главная',
        url: '/',
    },
    [EPaths.TASKS]: {
        title: 'Задачи',
        url: '/tasks'
    },
    [EPaths.CATEGORIES]: {
         title: 'Категории',
        url: '/categories'
    }
}