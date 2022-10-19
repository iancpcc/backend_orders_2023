import { Size } from "@entity/ClotheEntity"

export interface SizeRepository {
    save(size:Size):Promise<Size>
    update(size:Size):Promise<Size>
    delete(id:number):Promise<Size>
    getSizeById(id:number):Promise<Size>
    getAllSizes():Promise<Size>
}