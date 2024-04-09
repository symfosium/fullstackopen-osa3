const express = require('express'); // Importing express framework
const morgan = require('morgan'); // Importing morgan module
const app = express(); // Creating instance of Express object
//Middlewares

app.use(express.json()); // Using of json-parser middleware
app.use(morgan('tiny'));// Using of morgan middleware, tiny-format

const requestLogger = (request,response,next) => {
   console.log('Method', request.method);
   console.log('Path', request.path);
   console.log('Body', request.body);
   console.log('---');
   console.log("Middleware requestLogger")
   next();
}

app.use(requestLogger); //Using of requestLogger Middleware

const genereteId = () => {
   let MaxId = persons.length > 0
      ? Math.max(...persons.map(p => p.id))
      : 0;
   return MaxId + 1;
}

// Array of Persons
let persons = [
   { id: 1, name: 'Arto Hellas', number: '040-123456' },
];

// 3.1
app.get('/', (request, response) => {
   response.send('<h1>Phone Book by Anton</h1>')
})

app.get('/api/persons', (request, response) => {
   response.json(persons);
})

//3.2
app.get('/api/info', (request, response) => {
   const currentTime = new Date();
   const personQty = persons.length;
   const message = `<p>${currentTime}</p>\n<p>Phonebook has info for ${personQty} people</p>`;

   response.send(message)
})

//3.3
app.get('/api/persons/:id', (request, response) => {
   const id = Number(request.params.id);
   const person = persons.find(person => person.id === id);
   if (person) {
      response.json(person) 
   } else {
      response.status(404).send('<h2>User not found</h2>').end();
   }
})

//3.4
app.delete('/api/persons/:id', (request, response) => {
   const id = Number(request.params.id);
   persons = persons.filter(person => person.id !== id);
   response.status(204).end()
})

//3.5
app.post('/api/persons', (request, response) => {
   const body = request.body;
   if (!body.name || !body.number) {
      return response.status(400).json({error: 'Content missing'});
   } 

   const nameExists = persons.some(p => p.name === body.name);

      if (nameExists) {
         return response.status(400).json({error: "name must be unique"});
      } else {
      const person = {
      id: genereteId(),
      name: body.name,
      number: body.number,
      }

      persons = persons.concat(person);
      response.json(person)
   }
})



const PORT = 3001;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
})
