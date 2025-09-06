// Convert Object → JSON string
const person = { name: "Sara", age: 22 };
const jsonString = JSON.stringify(person);
console.log(jsonString, typeof jsonString);

// Convert JSON string → Object
const person1 = '{ "name": "Sara", "age": 22 }';
const jsonObject = JSON.parse(person1);
console.log(jsonObject);

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(result);



const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((data) => console.log(data))
}

// const loadPost = () => {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     fetch(url)
//     .then((res)=>res.json())
//     .then((json) => {
//         console.log(json);
//         displayPost(json);
//     });
// };

// const displayPost = (posts) => {
//     posts.forEach(post => {
//         console.log(post);
//     });
// };