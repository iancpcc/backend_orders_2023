import { ClotheSize } from "@entity/ClotheEntity"

export interface ClotheSizeRepository {
    save(clotheSize:ClotheSize):Promise<ClotheSize>
    update(clotheSize:ClotheSize):Promise<ClotheSize>
    delete(cod:number):Promise<ClotheSize>
    getClotheSizeByCod(code:number):Promise<ClotheSize>
    getAllClotheSizes():Promise<ClotheSize>
}