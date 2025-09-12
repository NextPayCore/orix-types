import type { LessonStatus, QuestionStatus, QuestionType } from '../../enums/bffweb/lesson.enum';
import type { CertificateInfo } from './exam.interface';

export interface Lesson {
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

export interface LessonDisplay {
  lessonId: string;
  title: string;
}

// Đáp án
export interface AnswerOption {
  text: string;
  isCorrect: boolean;
}

// Câu hỏi
export interface Quiz {
  _id: string;
  productId: string;
  question: string;
  description: string;
  type: QuestionType;
  status: QuestionStatus;
  answers: AnswerOption[];
  createdAt: string;
  updatedAt: string;
}

export interface UserProductStateInfoRes {
  userId: string;
  productId: string;
  username: string;
  completedLessons: string[];
  examPassed: boolean;
  trainingPassed: boolean;
  certificateInfo?: CertificateInfo; // có thể undefined nếu chưa thi
}
