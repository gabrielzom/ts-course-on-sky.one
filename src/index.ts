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

async function req(): Promise<void> {
  const response = await axios.get(`${baseUrl}/todos/1`) as ResponseTodo;
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
}

req()