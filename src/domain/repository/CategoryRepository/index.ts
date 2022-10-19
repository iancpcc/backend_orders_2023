import { Category } from '@entity/ClotheEntity';

export interface CategoryRepository {
    save(category:Category):Promise<Category>
    update(category:Category):Promise<Category>
    delete(id:number):Promise<Category>
    getCategoryById(id:number):Promise<Category>
    getAllCategories(id:number):Promise<Category>
}