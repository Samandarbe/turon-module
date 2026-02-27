import { Lang } from '../../interfaces';
import { OptionType } from '../../../enums';
export declare class CreateOptionDto {
    name: Lang;
    type: OptionType;
    is_active: boolean;
}
