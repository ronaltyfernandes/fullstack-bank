import { Category } from '../category.entity';
import { CreateCategoryDto } from './create-category.dto';

export class SelectCategoryDto extends CreateCategoryDto {
  constructor(category: Category) {
    super();
    this.id = category.id;
    this.name = category.name;
    this.user = category.user;
    this.description = category.description;
    this.incomeExpensive = category.incomeExpensive;
    this.createdAt = category.createdAt;
    this.updatedAt = category.updatedAt;
  }
}
