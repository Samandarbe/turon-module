export interface Lang {
    ru: string;
    en: string;
    uz: string;
}
export declare const LangObj: {
    ru: string;
    uz: string;
    en: string;
    zh: string;
};
export interface PhoneAndEmail {
    position?: number;
    value?: string;
    is_active?: boolean;
    title?: Lang;
}
export interface Social {
    position?: number;
    value?: string;
    icon?: string;
    title?: string;
}
export declare class User {
    position?: number;
    value?: string;
    is_active?: boolean;
    title?: Lang;
}
export interface Address {
    position?: number;
    value?: string;
    is_active?: boolean;
    title?: Lang;
    point?: string;
}
export interface Work {
    position?: number;
    value?: Lang;
    title?: Lang;
}
