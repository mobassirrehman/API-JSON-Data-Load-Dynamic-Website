1. HTTP vs HTTPS

HTTP (HyperText Transfer Protocol)
	•	A protocol used for communication between a client (browser, app) and a server (website).
	•	Data is sent in plain text → anyone intercepting it (like a hacker) can read it.
Example:
http://example.com

HTTPS (HyperText Transfer Protocol Secure)
	•	Same protocol as HTTP but with encryption (SSL/TLS).
	•	Data is encrypted before being transferred, so hackers cannot read sensitive info (like passwords, card numbers).
	•	More secure, trusted by browsers (padlock 🔒 icon).
Example:
https://example.com

2. API (Application Programming Interface)
	•	An API is like a messenger between two systems → it allows software to talk to each other.
	•	Example: When your app fetches weather data, it calls an API that returns the temperature, humidity, etc.

How APIs work with HTTP/HTTPS
	•	APIs usually use HTTP/HTTPS for communication.

Example request to an API (over HTTPS):
https://api.openweathermap.org/data/2.5/weather?q=London&appid=API_KEY

Here:
	•	https:// → secure communication.
	•	api.openweathermap.org → API server.
	•	/data/2.5/weather → endpoint (specific data you want).
	•	q=London&appid=API_KEY → query parameters.

Types of APIs
	1.	REST API → uses HTTP methods (GET, POST, PUT, DELETE).
	2.	SOAP API → XML-based, heavier than REST.
	3.	GraphQL API → query only the data you need.

3. Intro to JSON
What is JSON?

JSON stands for JavaScript Object Notation.
It’s a lightweight format for storing and sharing data between systems.
	•	Human-readable (easy to understand).
	•	Language-independent (used by almost all programming languages).
	•	Based on key-value pairs.

⸻

Basic JSON Example
{
  "name": "John",
  "age": 22,
  "isStudent": true,
  "skills": ["JavaScript", "HTML", "CSS"],
  "address": {
    "city": "Moscow",
    "country": "Russia"
  }
}
🔎 Explanation:
	•	Curly braces {} → JSON object.
	•	Keys ("name", "age", "skills") must always be in double quotes " ".
	•	Values can be:
	•	String → "Mobassir"
	•	Number → 22
	•	Boolean → true / false
	•	Array → ["JavaScript", "HTML", "CSS"]
	•	Object → another { ... }

Why JSON is Important?
	•	Used in APIs to send/receive data.
	•	Easy to convert between JavaScript objects and JSON strings.

---- Convert Object → JSON string ----

const person = { name: "Mobassir", age: 22 };
const jsonString = JSON.stringify(person);
console.log(jsonString);
// Output: {"name":"Mobassir","age":22}

----- Convert JSON string → Object -----

const jsonData = '{"name":"Mobassir","age":22}';
const obj = JSON.parse(jsonData);
console.log(obj.name); // Mobassir
console.log(obj.age);  // 22