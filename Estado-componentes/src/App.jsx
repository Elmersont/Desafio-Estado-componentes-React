import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Registro from './components/Registro'
import Stack from 'react-bootstrap/Stack';

function App() {

  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');
  
  return (
    <>
      <Container   gap={1}>

        <Stack className='stack' gap={3}>

        <div className="p-2">

            <h1> Crea una cuenta</h1>

        </div>

        <Registro setMessage={setMensaje} setTypeMessage={setTipoMensaje}>
        </Registro>  

        {mensaje && <Alert message={mensaje} variant={tipoMensaje} />}

        </Stack> 
       
      </Container>

     
    </>
  )
}

export default App