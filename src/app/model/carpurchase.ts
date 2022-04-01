import { Car } from "./car";
import { User } from "./user";

export class CarPurchase{

    public carid!:string;
    public purchasedate!:string;
    public purchaseid!:string;
    public car!: Car;
    public user!: User;
    public userid!: string;

    constructor(){
    }
}