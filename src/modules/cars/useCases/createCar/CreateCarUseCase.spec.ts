import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  })

  it("Should be able to create car", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Name",
      description: "Car's description",
      daily_rate: 100,
      license_plate: "zzz111",
      fine_amount: 60,
      brand: "Car brand",
      category_id: "category123"
    });

    expect(car).toHaveProperty("id");
  });

  it("Should not be able to create a car with a duplicated license plate", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        description: "Car's description",
        daily_rate: 100,
        license_plate: "zzz111",
        fine_amount: 60,
        brand: "Car brand",
        category_id: "category123"
      });

      await createCarUseCase.execute({
        name: "Car2",
        description: "Car's description",
        daily_rate: 100,
        license_plate: "zzz111",
        fine_amount: 60,
        brand: "Car brand",
        category_id: "category123"
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to create a car with default availability", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "Car's description",
      daily_rate: 100,
      license_plate: "zasd111",
      fine_amount: 60,
      brand: "Car brand",
      category_id: "category123"
    });

    expect(car.available).toBe(true);
  });
})