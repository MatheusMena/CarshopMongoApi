import IService from '../interfaces/IService';
import { IMotorcycle, motorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog'; 

class MotoService implements IService<IMotorcycle> { 
  private _Moto:IModel<IMotorcycle>;
  constructor(model:IModel<IMotorcycle>) {
    this._Moto = model;
  }

  public async create(obj:IMotorcycle):Promise<IMotorcycle> {
    const parsed = motorcycle.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error; 
    }
    return this._Moto.create(obj);
  }

  public async read():Promise<IMotorcycle[]> {
    const Motos = await this._Moto.read();
    if (!Motos) throw new Error(ErrorTypes.EntityNotFound);
    return Motos;
  }

  public async readOne(_id:string):Promise<IMotorcycle> {
    const getMotoByID = await this._Moto.readOne(_id);
    if (!getMotoByID) throw new Error(ErrorTypes.EntityNotFound);
    return getMotoByID;
  }

  public async update(_id:string, obj:IMotorcycle):Promise<IMotorcycle | null> {
    const parsed = motorcycle.safeParse(obj);
    await this.readOne(_id);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._Moto.update(_id, obj);
  }

  public async delete(_id:string):Promise<IMotorcycle | null> {
    await this.readOne(_id);
    return this._Moto.delete(_id);
  }
}

export default MotoService;