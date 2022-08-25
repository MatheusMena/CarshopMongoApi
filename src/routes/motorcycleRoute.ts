import { Router } from 'express';
import MotoController from '../controllers/MotoController';
import MotoModel from '../models/MotoModel';
import MotoService from '../services/MotoService';

const route = Router();
 
const moto = new MotoModel();
const motoService = new MotoService(moto);
const motoController = new MotoController(motoService);
const motoId = '/motorcycles/:id';
route.post('/motorcycles', (req, res) => motoController.create(req, res));
route.get('/motorcycles', (req, res) => motoController.read(req, res));
route.get(motoId, (req, res) => motoController.readOne(req, res));
route.put(motoId, (req, res) => motoController.update(req, res));
route.delete(motoId, (req, res) => motoController.delete(req, res));
export default route;