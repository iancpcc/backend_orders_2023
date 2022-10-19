import { Clothe } from '@entity/ClotheEntity';

export interface ClotheRepository {
    save(clothe:Clothe):Promise<Clothe>
    update(clothe:Clothe):Promise<Clothe>
    delete(cod:number):Promise<Clothe>
    getClotheByCod(code:number):Promise<Clothe>
    getAllClothes():Promise<Clothe>
}