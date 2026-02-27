export declare class ClientGoogleRegistorDto {
    email: string;
    first_name: string;
    last_name: string;
    fbToken: string;
    photo: string;
    referrer: string;
    device_data: string;
    language?: string;
}
export declare class ClientAppleRegistorDto {
    email: string;
    device_data: string;
    apple_id: string;
    referrer: string;
    first_name: string;
    last_name: string;
    fbToken: string;
    language?: string;
}
export declare class ClientFacebookRegisterDto {
    email: string;
    first_name: string;
    last_name: string;
    faceBookToken: string;
    fbToken: string;
    language?: string;
}
export declare class ClientRegisterDto {
    password: string;
    password_length: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    referrer: string;
    email: string;
    fbToken: string;
    country: string;
    device_data: string;
    language?: string;
}
export declare class ClientForgotPasswordDto {
    password: string;
    phone_number: string;
    email: string;
    language?: string;
}
