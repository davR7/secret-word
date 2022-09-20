import {arrayRandomValue} from './arrayRandomValue';

export const pickWordCategoryPoints = (categoryList, wordsList, categoryPoints) => {
    const key = arrayRandomValue(Object.keys(categoryList))
    const category = categoryList[key]
    const word = wordsList[key][arrayRandomValue(wordsList[key])]
    const points = categoryPoints[key]
    return [category, word, points]
}