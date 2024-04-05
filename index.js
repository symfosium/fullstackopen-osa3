const express = require('express'); // Importing express framework
const app = express(); // Creating instance of Express object
app.use(express.json()); // Using of json-parser middleware

// Array of Persons
let persons = [
   {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456",
   },
   {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-543232",
   },
   {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-765432",
   },
   {
      id: 4,
      name: "Mary Poppendick",
      number: "040-1098232",
   },
]

app.get('/', (request, response) => {
   response.send('<h1>Phone Book by Anton</h1>')
})

app.get('/api/persons', (request, response) => {
   response.json(persons);
})

const PORT = 3001;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
})