interface FAQParams {
    id: number;
    question: string;
    answer: string;
}

export interface FAQData {
    items: FAQParams[];
}