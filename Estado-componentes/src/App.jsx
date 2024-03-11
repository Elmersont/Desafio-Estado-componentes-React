import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Registro from './components/Registro'
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import Alerta from './components/Alert'



function App() {

  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('');

  const handleAlerta = (mensaje, color) => {
    setMensaje(mensaje);
    setColor(color);
  };

  return (
    <>
      <Container   gap={1}>

        <Stack className='stack' gap={3}>

        <div className="p-2">

            <h1> Crea una cuenta</h1>

        </div>

        <Registro onAlerta={handleAlerta}>
        </Registro>  

        {mensaje && <Alerta mensaje={mensaje} color={color} />}

        </Stack> 
       
      </Container>

     
    </>
  )
}

export default App