export interface ResponseErrorType {
    message?: string;
}

export interface ResponseType<T> {
    message: string;
    data: T;
    statusCode: number;
    errors?: ResponseErrorType[];
}