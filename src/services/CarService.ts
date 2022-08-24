import IService from '../interfaces/IService';
import { ICar, car } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog'; 

class CarService implements IService<ICar> { 
  private _car:IModel<ICar>;
  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    const parsed = car.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error; 
    }
    return this._car.create(obj);
  }

  public async read():Promise<ICar[]> {
    const cars = await this._car.read();
    if (!cars) throw new Error(ErrorTypes.EntityNotFound);
    return cars;
  }

  public async readOne(_id:string):Promise<ICar> {
    const getCarByID = await this._car.readOne(_id);
    if (!getCarByID) throw new Error(ErrorTypes.EntityNotFound);
    return getCarByID;
  }

  public async update(_id:string, obj:ICar):Promise<ICar | null> {
    const parsed = car.safeParse(obj);
    await this.readOne(_id);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.update(_id, obj);
  }
}

export default CarService;