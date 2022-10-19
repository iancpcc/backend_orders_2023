export interface ICryptography{

    encrypt(text: string):Promise<string>;
    decrypt ( text: string):Promise<string>;
    compare ( text: string, verify:string):Promise<boolean>;

}