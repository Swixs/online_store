import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'phones' },
      { id: 2, name: 'frezzes' },
      { id: 3, name: 'nout' },
      { id: 4, name: 'abc' },
    ];

    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];

    this._devices = [
      {
        id: 1,
        name: `iphone`,
        price: 1000,
        rating: 5,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLxX_nTg27V3ZsNTRpoQGXczoUF-A7Oo8rBqU01qQLxiRBfQeiIkXjSgXYyL3ggoKvOUoiDf2yv8zueJXjdiIZkggJS8JP-4zLwZ-JZu9JHWXp6hbHfMyIR7UH8gCkpcse6-0klg&usqp=CAc',
      },
      {
        id: 2,
        name: `iphone`,
        price: 1000,
        rating: 5,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLxX_nTg27V3ZsNTRpoQGXczoUF-A7Oo8rBqU01qQLxiRBfQeiIkXjSgXYyL3ggoKvOUoiDf2yv8zueJXjdiIZkggJS8JP-4zLwZ-JZu9JHWXp6hbHfMyIR7UH8gCkpcse6-0klg&usqp=CAc',
      },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }
}
