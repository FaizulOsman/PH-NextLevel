// /* ======================== 3-8 (Asynchronous Typescript) ======================== */
// /* //////////////////// Asynchronous Typescript //////////////////// */
// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data is fetched";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed to fetch data");
//     }
//   });
// };

// const getPromiseData = async (): Promise<string> => {
//   const data = await makePromise();
//   return data;
// };

// /* //////////////////// Asynchronous Data Load //////////////////// */
// interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
// const getTodo = async (): Promise<ITodo> => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await res.json();
// };
// const getTodoData = async (): Promise<void> => {
//   const result = await getTodo();
//   console.log(result);
// };
// getTodoData();
