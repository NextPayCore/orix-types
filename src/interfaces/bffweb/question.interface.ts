import { QuestionStatus, QuestionType } from "@/enums/bffweb/question.enum"

export interface IQuestion {
  _id?: string
  productId?: string
  question?: string
  description?: string
  type?: QuestionType
  status?: QuestionStatus
  name?: string
  answers: IAnswer[]
  createdAt?: string
  updatedAt?: string
}

export interface IAnswer {
  text: string
  isCorrect: boolean
}
