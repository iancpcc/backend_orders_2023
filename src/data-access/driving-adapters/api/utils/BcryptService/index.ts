import { ICryptography } from "@service/utils/ICryptography";
import bcryptjs from "bcryptjs"

export class BcryptService implements ICryptography{
    private readonly salt = bcryptjs.genSaltSync();

    async encrypt(text: string): Promise<string> {
       return bcryptjs.hashSync(text, this.salt);
    }
    decrypt(text: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    async compare(text: string, verify: string): Promise<boolean> {
       return   await bcryptjs.compareSync(text, verify);
    }

}