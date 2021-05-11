const express = require('express')
const app = express()

app.use(express.static('build'))

app.use(express.json())

const cors = require('cors')
app.use(cors())

var morgan = require('morgan')

morgan.token('post_body', function (req, res) {
    if (req.method === "POST") {
        const body = req.body
        body['number'] = body['number'].replace(/[0-9]/g, 'X')
        return JSON.stringify(body)
    } else {
        return ''
    }
})

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :post_body"))

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

let persons = [
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "123-043-0999",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "Michael Jordan",
      "number": "223-232-2323",
      "id": 11
    },
    {
      "name": "Thomas Jefferson",
      "number": "894-031-0933",
      "id": 12
    },
    {
      "name": "Mark Cuban",
      "number": "999-999-9999",
      "id": 13
    },
    {
      "name": "Tim Farrell",
      "number": "123-456-0934",
      "id": 14
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Welcome to the PhonebookAPI!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.get('/info', (request, response) => {
  const now = new Date()
  response.send(`<p>The <b>PhonebookAPI</b> has info on ${persons.length} people.<\p><p>${now.toString()}</p>`)
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const generateId = (obj_arr) => {
  const maxId = obj_arr.length > 0
    ? Math.max(...obj_arr.map(o => o.id))
    : 0
  return maxId + 1
}

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000)
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(notes),
  }

  notes = notes.concat(note)

  response.json(note)
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'Person name or number is missing'
    })
  }

  const matchedPersons = persons.filter(p => p.name.includes(body.name))

  if (matchedPersons.length > 0) {
    return response.status(400).json({
      error: 'Person name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateRandomId(),
  }

  persons = persons.concat(person)

  response.json(person)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})