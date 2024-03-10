import 'bootstrap/dist/css/bootstrap.min.css';
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import './Registro.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Registro() {
        return (
            <>
    
                <div className="p-2">

                    <Container>

                        <Row className="justify-content-md-center">

                            <Col xs lg="2">
                                <SocialButton type="facebook"></SocialButton>
                            </Col>

                            <Col md="auto">
                                <SocialButton type="github"></SocialButton>
                            </Col>

                            <Col xs lg="2">
                                <SocialButton type=""></SocialButton>
                            </Col>

                        </Row>

                    </Container>

                </div>

                <div className="p-2">

                    <Formulario></Formulario>

                </div> 

            </>
        );
    }

export default Registro;