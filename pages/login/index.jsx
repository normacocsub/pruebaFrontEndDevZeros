import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/pages/login/login.module.scss';
import { useState } from 'react';
import  {apiRestPost}  from '../../services/request';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginData = async () => {
        let result = await apiRestPost(process.env.NEXT_PUBLIC_BACKEND_URL+'login',{
            correo: email,
            password,
            nombres: '',
            apellidos: ''
        })
        if(!result.error){
            localStorage.setItem('token', result.token);
            router.push('/biblioteca');
        }
        console.log(result);
    } 
    return (
        <>
            <div className={styles.formContainer}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={loginData}>
                        Login
                    </Button>
                </Form>
            </div>
        </>
    )
}


export default Login;