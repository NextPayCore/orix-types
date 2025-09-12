export interface ExamConfig {
  numberOfQuestions: number;
  durationInSeconds: number; // thời gian thi (giây)
  passingScore: number; // điểm cần đạt
  scorePerQuestion: number; // điểm mỗi câu hỏi
}

export interface ExamDetail {
  questionId: string;
  questionAnswers: string[];
  userAnswers: string[];
  isCorrect: boolean;
}

export interface CertificateInfo {
  examDate: string; // ISO date string
  duration: number; // tính bằng giây
  totalScore: number; // điểm số tổng
  examDetails: ExamDetail[];
}

export type SubmitExamResultReq = CertificateInfo;
