export declare class SignUpAuthDto {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    address: string;
    phone: string;
    country?: string;
    city?: string;
    createdAt: string;
    constructor(partial: Partial<SignUpAuthDto>);
}
