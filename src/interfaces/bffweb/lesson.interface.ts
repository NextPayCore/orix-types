import { LessonStatus } from '@/enums';
import { QuestionStatus, QuestionType } from '@/enums/bffweb/question.enum';
import type { CertificateInfo } from './exam.interface';

export interface ILesson {
  _id: string;
  productId: string;
  icon: string; // emoji hoặc URL icon
  title: string;
  subTitle: string;
  description: string;
  contentLink: string; // link đến nội dung bài học (iframe, video, doc...)
  status: LessonStatus; // enum có thể mở rộng
  createdAt: string; // ISO datetime
  updatedAt: string; // ISO datetime
}

export interface ILessonDisplay {
  lessonId: string;
  title: string;
}

// Đáp án
export interface IAnswerOption {
  text: string;
  isCorrect: boolean;
}

// Câu hỏi
export interface IQuiz {
  _id: string;
  productId: string;
  question: string;
  description: string;
  type: QuestionType;
  status: QuestionStatus;
  answers: IAnswerOption[];
  createdAt: string;
  updatedAt: string;
}

export interface IUserProductStateInfoRes {
  userId: string;
  productId: string;
  username: string;
  completedLessons: string[];
  examPassed: boolean;
  trainingPassed: boolean;
  certificateInfo?: CertificateInfo; // có thể undefined nếu chưa thi
}

export interface ILessonDisplay {
  lessonId: string
  title: string
}
