// Referencias
// Estaod del socket
const lblOnline = document.getElementById('lblOnline')
const lblOffline = document.getElementById('lblOffline')

// Input y boton
const txtMensaje = document.getElementById('txtMensaje')
const btnEnviar = document.getElementById('btnEnviar')

const socket = io()

socket.on('connect', () => {
  lblOffline.style.display = 'none'
  lblOnline.style.display = ''
})

socket.on('disconnect', () => {
  lblOffline.style.display = ''
  lblOnline.style.display = 'none'
})

// Handle del input
btnEnviar.addEventListener('click', () => {
  const mensaje = txtMensaje.value

  const payload = {
    mensaje,
    id: 'ad33fad',
    fecha: new Date().getTime()
  }

  // Enviar por socket
  socket.emit('enviar-mensaje', payload, (id) => {
    console.log('Desde el server', id)
  })
})

socket.on('enviar-mensaje', (payload) => {
  console.log(payload)
})
