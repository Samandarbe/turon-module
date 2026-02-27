import { PRICE_TYPE, UNIT, SaleType } from '../../../enums';
export declare class CreateProductDto {
    name: any;
    content: any;
    parameter_title: any;
    parameter: string;
    position: string;
    count: number;
    sale_count: number;
    price: number;
    sale: number;
    type: [1, 2, 3, 4];
    sale_type: SaleType;
    price_type: PRICE_TYPE;
    unit: UNIT;
    images: string[];
    is_active: string;
    menu: string;
    product: string;
    color: string;
    tags: string;
    options: object[];
}
