import { ICar } from '../../../interfaces/ICar';

export const carCreateMock: ICar = {
    model: 'Um carro',
    year: 2022,
    color: 'black',
    buyValue: 10000,
    seatsQty: 4,
    doorsQty: 4,
};

export const carMockWithId: ICar & { _id: string } = {
	_id: '45gfggt32gtg5g1t5g1j113f',
    model: 'Um carro',
    year: 2022,
    color: 'black',
    buyValue: 10000,
    seatsQty: 4,
    doorsQty: 4,
};

export const allCarsMock: ICar[] & { _id: string }[] = [
	{
        _id: '45gfggt32gtg5g1t5g1j113f',
        model: 'Um carro',
        year: 2022,
        color: 'black',
        buyValue: 10000,
        seatsQty: 4,
        doorsQty: 4,
	},
];

export const carMockChange: ICar = {
    model: 'Um carro',
    year: 2022,
    color: 'black',
    buyValue: 9000,
    seatsQty: 4,
    doorsQty: 4,
};
