import type { LessonStatus, QuestionStatus, QuestionType } from '../../enums/bffweb/lesson.enum';
import type { CertificateInfo } from './exam.interface';
export interface Lesson {
    _id: string;
    productId: string;
    icon: string;
    title: string;
    subTitle: string;
    description: string;
    contentLink: string;
    status: LessonStatus;
    createdAt: string;
    updatedAt: string;
}
export interface LessonDisplay {
    lessonId: string;
    title: string;
}
export interface AnswerOption {
    text: string;
    isCorrect: boolean;
}
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
    certificateInfo?: CertificateInfo;
}
//# sourceMappingURL=lesson.interface.d.ts.map