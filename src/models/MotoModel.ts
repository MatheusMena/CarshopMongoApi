import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const MotoMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

class Motos extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycles', MotoMongooseSchema)) {
    super(model);
  }
}

export default Motos;