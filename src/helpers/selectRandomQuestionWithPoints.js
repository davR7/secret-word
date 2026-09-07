import {arrayRandomValue} from './arrayRandomValue';

export const selectRandomQuestionWithPoints = (questionList, words) => {
    const categories = Object.keys(questionList);    
    const randomCategory = arrayRandomValue(categories)

    const questions = questionList[categories[randomCategory]].questions
    const randomQuestion = arrayRandomValue(questions)

    const points = questionList[categories[randomCategory]].points
    
    const avaliableQuestions = questions.filter(question => 
        !words.includes(question.word)
    )
    
    const question = avaliableQuestions[randomQuestion];
    words.push(question.word);
    
    return [points, question, words]
}
