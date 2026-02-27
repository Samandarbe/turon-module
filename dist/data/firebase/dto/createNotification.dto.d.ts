import { NotificationType } from '../../../enums';
export declare class CreateNotificationDto {
    title: string;
    user: string;
    status: boolean;
    type: NotificationType;
    content: string;
}
