import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react'


const Formulario = ({onAlerta}) => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [confirmarContraseña, setConfirmarContraseña] = useState("")
    
  
    const handleSumit = (e) => {
        e.preventDefault();
        if (nombre === '' || email === '' || contraseña === '' || confirmarContraseña === '')
    {
            onAlerta('Completa todos los campos!', 'danger')
    return; }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            onAlerta('El formato del correo electrónico no es válido', 'danger')
        return;
        }

        if (contraseña !== confirmarContraseña) {
            onAlerta('Las contraseñas no coinciden', 'danger')
        return;
        }

        onAlerta('Tu registro fue un exito!', 'success')
        setNombre('');
        setEmail('');
        setContraseña('');
        setConfirmarContraseña('');
        return
        
    };


        return (
            <>
                <div>
                    <h6>O usa tu email para registrarte</h6>
                </div>

               <Form onSubmit={handleSumit}>

                    <Form.Group className="mb-3" controlId="nombre" >
                        <Form.Control type="text" placeholder="Nombre" value= {nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control type="email" placeholder="Tuemail@ejemplo.com" value= {email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contraseña">
                        <Form.Control type="password" placeholder="Contraseña" value= {contraseña} onChange={(e) => setContraseña(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmarContraseña">
                        <Form.Control type="password" placeholder="Confirmar Contraseña" value= {confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)}/>
                    </Form.Group>

                    <Button variant="success" type="submit" style={{width:"30rem"}}>Registrarse</Button>{' '}   
         
                </Form>
                            
            </>

        );
    }

export default Formulario;