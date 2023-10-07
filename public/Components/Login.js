import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import { Login } from '../api';
import * as Yup from "yup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
    
});

function AuthLogin() {


    const router = useRouter();

    return (
        
        <Container fluid className= "vh-100 d-flex flex-column" style={{backgroundImage: "url('/assets/images/bg9.jpeg')"}}>
            <Row className="h-100">
                <Col md={{ span: 8, offset: 2 }} style={{height:"100%"}}>
                    <Card style={{marginTop:"15%",marginBottom:"20%"}}>
                        <Card.Body>
                            <Row>
                                <Col md={8}>
                                    <Card.Title>
                                        <div>
                                            <img className="logo" src="/assets/images/sourcign_logo.jfif" alt=""/>
                                            <h2 style={{textAlignLast:"center"}}>Welcome!</h2>
                                        </div>
                                    </Card.Title>
                                    
                                    <Formik
                                        enableReinitialize="true"
                                        initialValues={{
                                            email: "",
                                            password: "",
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={async (values) => {
                                            await Login(values).then(function (res) {
                                            if (res && res.status == 200) {
                                                console.log(res.data.token);
                                                localStorage.setItem('token',res.data.token);
                                                toast.success("Logged In Successfully");
                                                router.push({
                                                pathname: '/'
                                                });
                                            } else {
                                                console.log(res);
                                                toast.error(res.data.error);
                                                
                                            }
                                            })
                                            
                                
                                        }}
                                    >
                                        {({ handleSubmit, handleChange, values, setFieldValue, errors, touched }) => (
                                            <form onSubmit={handleSubmit}>
                                            
                                                
                                                <Row>
                                                    <Col xs={{ span: 6, offset: 4 }} md={{ span: 6, offset: 4 }} style={{marginTop:"50px"}}>
                                                    <div style={{  textAlignLast:"center",textTransform: "uppercase" }}>
                                                        <span style={{fontSize: "12px",color: "#cfcfcf"}}>Email*</span>
                                                        <InputGroup fullWidth size="Small">
                                                        
                                                            <Form.Control style={{border: "none",borderBottom: "1px solid rgba(0, 0, 0, 0.4)",borderRadius:"0px"}} autoFocus="true" id="email" name="email" type="email" onChange={handleChange} autoComplete="off"
                                                            value={values.email}  className={touched.email && errors.email ? "error" : null} />
                                                        </InputGroup>
                                                        {touched.email && errors.email ? (
                                                        <div className="error-message">{errors.email}</div>
                                                        ) : null}
                                                    </div>
                                                    </Col><br /><br />
                                                </Row>
                                                <Row>
                                                    
                                                    <Col xs={{ span: 6, offset: 4 }} md={{ span: 6, offset: 4 }}>
                                                        <div style={{ marginTop: '10px', textAlignLast:"center",textTransform: "uppercase" }}>
                                                            <span style={{fontSize: "12px",color: "#cfcfcf"}}>Password*</span>
                                                            <InputGroup fullWidth size="Small">
                                                            <Form.Control style={{border: "none",borderBottom: "1px solid rgba(0, 0, 0, 0.4)",borderRadius:"0px"}} id="password" name="password" type="password" onChange={handleChange} autoComplete="off"
                                                                value={values.password}  className={touched.password && errors.password ? "error" : null} />
                                                            </InputGroup>
                                                            {touched.password && errors.password ? (
                                                            <div className="error-message">{errors.password}</div>
                                                            ) : null}
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    
                                                    <Col xs={{ span: 6, offset: 4 }} md={{ span: 6, offset: 4 }}>
                                                        <div style={{ marginTop: '10px' }}>
                                                            <button className='sing-in' type="submit" style={{marginTop: "40px",marginBottom: "20px",background: "#d4af7a",textTransform: "uppercase"}} onClick={handleSubmit}>
                                                            SIGN IN 
                                                            </button>
                                                        </div>
                                                    </Col>
                                                    
                                                </Row>
                                                        
                                                    
                                            </form>
                                        )}
                                    </Formik>
                                    
                                </Col>
                                <Col md={4}>
                                    <div style={{textAlignLast:"center"}}>
                                        <h3>New here?</h3>
                                        <h5>Register to experience the power of finding best candidates for your open roles!</h5>
                                        <img src="/assets/images/bg.jpg"></img>
                                    </div>
                                </Col>
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            
        </Container>
    );
}

export default AuthLogin;
