import { inject, injectable } from 'tsyringe';
import { Category } from '@modules/cars/entities/Cetegory';

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const allCategories = await this.categoriesRepository.list();

    return allCategories;
  }
}

export { ListCategoriesUseCase };