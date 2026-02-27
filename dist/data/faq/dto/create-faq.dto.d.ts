import { Lang } from '../../interfaces';
export declare class CreateFaqDto {
    question: Lang;
    answer: Lang;
    position: string;
    is_active: string;
    category: string;
}
export declare class UpdateFaqDto {
    question: Lang;
    answer: Lang;
    position: string;
    is_active: string;
    category: string;
}
