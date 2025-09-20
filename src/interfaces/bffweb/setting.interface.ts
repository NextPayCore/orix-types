import { ILessonDisplay } from "./lesson.interface"

export interface IConfigurationExam {
  numberOfQuestions: number
  durationInSeconds: number
  passingScore: number
  scorePerQuestion: number
  _id?: string
}

export interface IConfigurationLesson {
  lessonDisplay: ILessonDisplay[]
}
