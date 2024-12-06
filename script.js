import { readFile } from "fs";
import fs from "fs/promises";
import fetch from "node-fetch";

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const usersData = await response.json();
//     const parsedData = usersData.map((data) => ({
//       ID: data.id,
//       Name: data.name,
//       UserName: data.username,
//       Email: data.email,
//     }));

//     await fs.writeFile("users.json", JSON.stringify(parsedData));
//   } catch (error) {
//     console.log("Fetch error: ", error);
//   }
// }
// fetchData();

// homework 2

// const [, , make, year, color] = process.argv;

// async function cars() {
//   const cars = await fs.readFile("cars.json", "utf-8");
//   const parsedCars = JSON.parse(cars);
//   const carsInfo = {
//     CarMake: make,
//     CarReleaseDate: year,
//     CarColor: color,
//   };
//   parsedCars.push(carsInfo);
//   await fs.writeFile("cars.json", JSON.stringify(parsedCars));
// }
// cars();

// HOMEWORK 3

// async function main() {
//   const text = await fs.readFile("text.txt", "utf-8");
//   let count = 0;
//   const vowels = /[aeiouAEIOU]/g;
//   const same = text.match(vowels);
//   if (same) {
//     count = same.length;
//   }
//   console.log(count);
// }

// main();
