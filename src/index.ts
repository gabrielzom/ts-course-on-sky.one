import axios from 'axios';

const baseUrl:string = "https://jsonplaceholder.typicode.com";

interface Report {
  isValid(): boolean
}

interface ResponseTodo {
  data: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  },
  report: Report
}

let numberInt: number;

/**
 * Converts a decimal number to an integer number.
 * @param floatNumber Is a any decimal value.
 * The number to be converted from decimal to integer and later returned.
 * @param round Is a optional parameter for orientation of convert: upper, lower or truncate.
 * If the 'round' not setted, the function returns the most close integer.
 */
function convertFloatToInt(floatNumber: number, round?: string):number {
  switch(round) {
    case 'upper':
      return Math.ceil(floatNumber);
    case 'lower':
      return Math.floor(floatNumber);
    case 'truncate':
      return Math.trunc(floatNumber);
    default:
      return Math.round(floatNumber);
  }
}

numberInt = convertFloatToInt(2.9)
console.log('PARSE INT ------------------> ', numberInt)

function printData(response: ResponseTodo): ResponseTodo {
  const { userId } = response.data;
  const { id } = response.data;
  const { title } = response.data;
  const { completed } = response.data;

  console.log(`
    USER_ID: ${userId}
    ID: ${id}
    TITLE: ${title}
    COMPLETED: ${completed}
  `)

  return response;
}

async function req(): Promise<ResponseTodo> {
  const response = await axios.get(`${baseUrl}/todos/1`) as ResponseTodo;
  return printData(response)
}


class Vehicle {

  private model: string | undefined;
  public mounter: string;

  constructor(mounter: string) {
    this.mounter = mounter
  }

  setModel(model: string): void {
    this.model = model;
  }

  public getModel(): string | undefined {
    return this.model;
  }

  public getMounter(): string {
    return this.mounter;
  }

  public drive(): void {
    console.log('Rum rum')
  }

  public hunk(): void {
    console.log('bee bee')
  }
}

class Car extends Vehicle {
  constructor(mounter: string) {
    super(mounter)
  }
  private lengthInMeters: number | undefined
  private maxVelocity: number | undefined
  private timeOfZeroToHundredKm: number | undefined

  public setLengthInMeters(lengthInMeters: number): void {
   this.lengthInMeters = lengthInMeters;
  } 
  
  public setMaxVelocity(maxVelocity: number): void {
    this.maxVelocity= maxVelocity
  }

  public setTimeOfZeroToHundreKm(timeOfZeroToHundredKm: number): void {
    this.timeOfZeroToHundredKm = timeOfZeroToHundredKm;
  }

  public getLengthInMeters(): number | undefined {
    return this.lengthInMeters;
  }

  public getMaxVelocity(): number | undefined {
    return this.maxVelocity;
  }

  public getTimeOfZeroToHundredKm(): number | undefined {
    return this.timeOfZeroToHundredKm;
  }
}

var car = new Car('GM')

console.log(car.setModel('Astra Belga'))
console.log(car.hunk())

req()