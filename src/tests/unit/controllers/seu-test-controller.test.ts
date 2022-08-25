// template para criação dos testes de cobertura da camada de controller

import * as sinon from 'sinon';
import chai from 'chai';
import { Request, Response } from 'express';
import CarController from '../../../controllers/CarController';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import {
    carCreateMock,
    carMockWithId,
    allCarsMock,
}  from './../mocks/car'


const { expect } = chai;
describe('car Controller', () => {
    const carModel = new CarModel()
    const carService = new CarService(carModel);
    const carController = new CarController(carService);
    // fazemos o cast de um objeto para um `Request` pois nosso controller só vai aceitar um objeto do tipo `Request` como primeiro parâmetro
    const req = {} as Request; 
    // o mesmo acontece com o segundo parâmetro
    const res = {} as Response;
  
    before(() => {
      sinon.stub(carService, 'create').resolves(carMockWithId);
      sinon.stub(carService, 'update').resolves(carMockWithId);
      sinon.stub(carService, 'read').resolves(allCarsMock);
 
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
  
    after(() => {
      sinon.restore()
    })
  
    describe('Create car', () => {
      it('Success', async () => {
        req.body = carCreateMock;
        await carController.create(req, res);
        expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
        expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
      });
    });
  
    describe('Update car', () => {
      it('Success', async () => {
        req.params = { id: carMockWithId._id}
        req.body = carCreateMock
         await carController.update(req, res);
        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      });
    });
  
    describe('Read car', () => {
      it('Success', async () => {
        await carController.read(req, res);
  
        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
        expect((res.json as sinon.SinonStub).calledWith(allCarsMock)).to.be.true;
      });
    });
  
  });