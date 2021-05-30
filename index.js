
require('dotenv').config()
const express = require('express')
const app = express()
const PhonebookEntry = require('./models/phonebook')

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

app.get('/', (request, response) => {
  response.send('<h1>Welcome to the PhonebookAPI!</h1>')
})

app.get('/api/persons', (request, response) => {
  PhonebookEntry.find({}).then(persons => { response.json(persons) } )
})

app.get('/api/persons/:id', (request, response, next) => {
  PhonebookEntry.findById(request.params.id).then(p => {
    if (p) {
        response.json(p)
      } else {
        response.status(404).end()
      }
  }).catch(error => next(error))
})

app.get('/info', (request, response) => {
  PhonebookEntry.countDocuments({}, function(err, count) {
      const now = new Date()
      response.send(`<p>The <b>PhonebookAPI</b> has info on ${count} people.<\p><p>${now.toString()}</p>`)
  })
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

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    const phonebookEntry = new PhonebookEntry({
      name: body.name,
      number: body.number
    })

    phonebookEntry.save()
        .then(savedEntry => {
            response.json(savedEntry.toJSON())
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  PhonebookEntry.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const phonebookEntry = {
      name: body.name,
      number: body.number
    }

  PhonebookEntry.findByIdAndUpdate(request.params.id, phonebookEntry,
                                   { new: true, runValidators: true, context: 'query' })
    .then(updatedPerson => {
      console.log(updatedPerson)
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})