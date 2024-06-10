const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const mongoose = require('mongoose')
const Document = require('./Document')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

const SAVE_INTERVAL_MS = 2000

mongoose.connect('https://raviteja8tun1rjscprqui5.drops.nxtwave.tech/testing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

const defaultValue = {
  ops: [
    {
      insert:
        'Welcome to the collaborative text editor powered by Quill and Socket.IO!\n',
    },
  ],
}

io.on('connection', socket => {
  let documentId

  socket.on('get-document', async () => {
    const document = await findOrCreateDocument()
    socket.join(documentId)
    socket.emit('load-document', document.data)
  })

  socket.on('send-changes', delta => {
    socket.broadcast.to(documentId).emit('receive-changes', delta)
  })

  socket.on('save-document', async data => {
    await Document.findByIdAndUpdate(documentId, {data})
  })

  const findOrCreateDocument = async () => {
    if (!documentId) {
      const newDocument = await Document.create({data: defaultValue})
      documentId = newDocument._id
      return newDocument
    }
    return Document.findById(documentId)
  }

  setInterval(async () => {
    if (!documentId) return
    const document = await Document.findById(documentId)
    io.to(documentId).emit('load-document', document.data)
  }, SAVE_INTERVAL_MS)
})

server.listen(3001, () => {
  console.log('Server listening on port 3001')
})
