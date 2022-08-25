// template para criação dos testes de cobertura da camada de model
import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import {
    carCreateMock,
    carMockWithId,
	allCarsMock,
}  from './../mocks/car'


const { expect } = chai;

describe('create car Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		sinon.stub(Model, 'find').resolves(allCarsMock);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carCreateMock);
            console.log(carCreateMock)
            console.log(newCar)
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

	
	describe('searching all cars', () => {
		it('successfully found all cars', async () => {
			const carFound = await carModel.read();
			expect(carFound).to.be.deep.equal(allCarsMock);
		});
	});
});