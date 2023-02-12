import {Owner} from './Owner';
import {Claim} from './Claim';
import {Driver} from './Driver';

export class Vehicle {

  public serialVersionUID: string = null;
  public vehicleID: number = null;
  public accidentID: number = null;
  public vehicleYear: number = 0;
  public registrationNumber: string = '';
  public VINNumber: string = '';
  public CTPPolicyNumber: string = '';
  public CTPPolicyStartDate: string = '';
  public CTPPolicyEndDate: string = '';
  public vehicleAtFaultIndicator: string = '';
  public ratingCode: string = '';
  public makeID: string = '';
  public modelDescription: string = '';
  public bodyID: string = '';
  public insuredCode: string = '';
  public owner: Owner = new Owner();
  public driver: Driver = new Driver();
  public requestDate: Date = null;
  public responseDate: Date = null;
  public accidentClassification: string = '';
  public claims: Claim[] = [];

}
