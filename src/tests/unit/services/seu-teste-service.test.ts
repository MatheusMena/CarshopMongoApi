// template para criação dos testes de cobertura da camada de model
import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { ErrorTypes } from '../../../errors/catalog';
import { ZodError } from 'zod';
import {
    carCreateMock,
    carMockWithId,
    allCarsMock,
    carMockChange,
}  from './../mocks/car'


const { expect } = chai;

describe('car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);
 
	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
        sinon.stub(carModel, 'read').resolves(allCarsMock);
        sinon.stub(carModel, 'update').resolves(carMockChange);
	})
	after(() => {
		sinon.restore()
	})
	describe('Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carCreateMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				// o "as any"(casting) abaixo pois o create não aceita um parâmetro inválido
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('Read All cars', () => {
		it('Success', async () => {
			const cars = await carService.read();

			expect(cars).to.be.deep.equal(allCarsMock);
		});
	})

    describe('Update car wrong id', () => {
        
		it('Failure', async () => {
			try {
				await carService.update('hggg12', carMockChange);
			} catch (error: any) {
				expect(error.message).to.be.equal(ErrorTypes.InvalidMongoId);
			}
		});
	});
});