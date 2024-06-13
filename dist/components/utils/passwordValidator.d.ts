interface Params {
    password: string;
    length?: number;
    shouldHaveNumber?: boolean;
    shouldHaveCapital?: boolean;
    invalidChars?: string;
    shouldHaveSpecialChars?: boolean;
}
interface Result {
    error: boolean;
    message: string;
}
declare const UsePasswordValidator: ({ password, length, shouldHaveNumber, shouldHaveCapital, invalidChars, shouldHaveSpecialChars, }: Params) => Result;
export default UsePasswordValidator;
