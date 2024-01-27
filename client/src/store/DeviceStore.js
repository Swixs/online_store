import { makeAutoObservable } from "mobx";

export default class DeviceStore{
  constructor (){
      this._device = []
      this._types = []
      this.brands = []
      
  }
}