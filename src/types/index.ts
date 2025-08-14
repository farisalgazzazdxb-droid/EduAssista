export interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
}

export interface Summary {
    id: string;
    noteId: string;
    summaryText: string;
}

export interface Flashcard {
    id: string;
    question: string;
    answer: string;
}

export interface PracticeTest {
    id: string;
    noteId: string;
    questions: Array<{
        question: string;
        options: string[];
        correctAnswer: string;
    }>;
}

export interface StudyPlan {
    id: string;
    userId: string;
    tasks: Array<{
        subject: string;
        deadline: Date;
        studyMaterials: string[];
    }>;
}