import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request & { body: ICar }, 
    res: Response<ICar>,
  ) {
    const { status, model, year, color, buyValue, doorsQty, seatsQty,
    } = req.body;
    const car = {
      status,
      model,
      year,
      color,
      buyValue,
      doorsQty,
      seatsQty };
    const result = await this._service.create(car);
    return res.status(201).json(result);
  }

  public async read(
    req: Request,
    res: Response<ICar[]>,
  ) {
    const getCar = await this._service.read();
    return res.status(200).json(getCar);
  }

  public async readOne(
    req: Request,
    res: Response<ICar>,
  ) {
    const getCarByID = await this._service.readOne(req.params.id);
    return res.status(200).json(getCarByID);
  }

  public async update(
    req: Request, 
    res: Response<ICar | null>,
  ) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }

  public async delete(
   
    req: Request, 
    res: Response<ICar | null>,
  ) {
    await this._service.delete(req.params.id);
    return res.status(204).end();
  }
}