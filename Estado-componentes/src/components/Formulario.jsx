import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react'
import Alert from './Alert'
const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [confirmarContraseña, setConfirmarContraseña] = useState("")
    const [errorIncompleto, setErrorIncompleto] = useState(false);
    const [error, setError] = useState("");
    const [confirmación, setConfirmación] =useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleNombreChange = (event) => {
        setNombre(event.target.value)
    }
    const handleContraseñaChange = (event) => {
        setContraseña(event.target.value)
    }
    const handleConfirmarContraseñaChange = (event) => {
        setConfirmarContraseña(event.target.value)
    }

    const validarDatos = (e) => {
        e.preventDefault();
        if (nombre === '' || email === '' || contraseña === '' || confirmarContraseña === '')
    {
            setErrorIncompleto(true);
            setError('Completa todos los campos!')
    return; }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorIncompleto(true);
            setError('El formato del correo electrónico no es válido')
        return;
        }

        if (contraseña !== confirmarContraseña) {
            setErrorIncompleto(true);
            setError('Las contraseñas no coinciden');
        return;
        }
        
        setConfirmación('Tu registro fue un exito!')
        setErrorIncompleto(false);
        setError('')
        setNombre('');
        setEmail('');
        setContraseña('');
        setConfirmarContraseña('');
    };


        return (
            <>
                <div>
                    <h6>O usa tu email para registrarte</h6>
                </div>

               <Form onSubmit={validarDatos}>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                        <Form.Control type="text" placeholder="Nombre" value= {nombre} onChange={handleNombreChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Tuemail@ejemplo.com" value= {email} onChange={handleEmailChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Contraseña" value= {contraseña} onChange={handleContraseñaChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Confirmar Contraseña" value= {confirmarContraseña} onChange={handleConfirmarContraseñaChange}/>
                    </Form.Group>

                    <Button variant="success" type="submit" style={{width:"30rem"}}>Registrarse</Button>{' '}   

                    {errorIncompleto && <Alert mensaje={error} color="danger"/>}
                    {confirmación && <Alert mensaje={confirmación} color="success"/>}           

                </Form>
                            
            </>

        );
    }

export default Formulario;