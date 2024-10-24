export const socketController = (socket) => {
  console.log('Cliente conectado', socket.id)

  socket.on('disconnect', () => {
    console.log('Cliente desconectado')
  })

  socket.on('enviar-mensaje', (payload, callback) => {
    const id = 123456
    callback(id)

    // Envia informacion a todos los clientes
    socket.broadcast.emit('enviar-mensaje', payload)

    console.log(payload)
  })
}
