import styles from '../../styles/pages/biblioteca/biblioteca.module.scss';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import  {apiRestPost, apiRestGet, apiRestPut}  from '../../services/request';
import { useRouter } from 'next/router';

const bibliotecaCreate = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState(0);
    const [modify, setModify] = useState(false);
    const { id } = router.query;

    const saveData = async () => {
        if(!modify){
            var result = await apiRestPost(process.env.NEXT_PUBLIC_BACKEND_URL+'library', {title, author, publisher, genre, price})
            if(!result.error){
                router.push('/biblioteca')
            
                return;
            }
            console.log(result.error.response);
            return;
        }
        var resultUpdate = await apiRestPut(process.env.NEXT_PUBLIC_BACKEND_URL+'library/'+id,
        {title, author, publisher, genre, price});
        if (!resultUpdate.error) {
            router.push('/biblioteca');
            return;
        }
        console.log(resultUpdate.error);

    }

    useEffect( async () => {
        if (id != (undefined || null) ){
            const library = await apiRestGet(process.env.NEXT_PUBLIC_BACKEND_URL+'library/'+id);
            if(!library.error){
                setModify(true);
                setTitle(library.title);
                setAuthor(library.author);
                setPublisher(library.publisher);
                setGenre(library.genre);
                setPrice(Number(library.price));
            }
        }
    }, [])
    return(
        <>
            <div className={styles.header}>
                <h1>Book Store</h1>
            </div>

            <div className={styles.formContainer}>
                <Form>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" placeholder="Ingresar Titulo Libro"
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        value={title}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el Autor del libro"
                        onChange={(e) => {
                            setAuthor(e.target.value)
                        }}
                        value={author}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Editor</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese la editora del libro" 
                        onChange={(e) => {
                            setPublisher(e.target.value)
                        }}
                        value={publisher}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Genero</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el Genero del libro"
                        onChange={(e) => {
                            setGenre(e.target.value)
                        }}
                        value={genre}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese el Valor del libro"
                        onChange={(e) => {
                            setPrice(e.target.value)
                        }}
                        value={price}
                        />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={saveData}>
                        {
                            modify ? (<>Modificar</>) : (<>Guardar</>)
                        }
                    </Button>
                </Form>
            </div>
        </>
    ) 
}

export default bibliotecaCreate;