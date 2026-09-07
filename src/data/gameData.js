import { biology } from "./questions/biology";
import { car } from "./questions/car";
import { food } from "./questions/food";
import { technology } from "./questions/technology";

export const questionList = {
  car: {
    points: 250,
    questions: car,
  },
  biology: {
    points: 200,
    questions: biology,
  },
  food: {
    points: 150,
    questions: food,
  },
  technology: {
    points: 300,
    questions: technology,
  },
};