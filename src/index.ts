import axios from 'axios';

const baseUrl:string = "https://jsonplaceholder.typicode.com";

interface ResponseTodo {
  data: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
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

req()