import { Address, PhoneAndEmail, Social, Work } from '../../interfaces';
export declare class CreateContactDto {
    phone_number: PhoneAndEmail[];
    email: PhoneAndEmail[];
    social: Social[];
    address: Address[];
    work_time: Work[];
    telegram_bot: string;
    map: boolean;
}
