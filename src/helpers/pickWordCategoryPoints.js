import {arrayRandomValue} from './arrayRandomValue';

export const pickWordCategoryPoints = (categoryList, categoryPoints, wordsList) => {
    const key = arrayRandomValue(Object.keys(categoryList))
    const category = categoryList[key]
    const points = categoryPoints[key]
    const word = wordsList[key][arrayRandomValue(wordsList[key])]
    return [category, points, word]
}