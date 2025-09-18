export interface ExamConfig {
    numberOfQuestions: number;
    durationInSeconds: number;
    passingScore: number;
    scorePerQuestion: number;
}
export interface ExamDetail {
    questionId: string;
    questionAnswers: string[];
    userAnswers: string[];
    isCorrect: boolean;
}
export interface CertificateInfo {
    examDate: string;
    duration: number;
    totalScore: number;
    examDetails: ExamDetail[];
}
export type SubmitExamResultReq = CertificateInfo;
//# sourceMappingURL=exam.interface.d.ts.map