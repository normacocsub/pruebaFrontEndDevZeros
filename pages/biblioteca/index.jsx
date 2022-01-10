import  {apiRestGet, apiRestDelete}  from '../../services/request';
import styles from '../../styles/pages/biblioteca/biblioteca.module.scss';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { Button, ButtonGroup } from 'react-bootstrap';






const Biblioteca = () => {
        const router = useRouter();
        const [modify, setModify] = useState(true);
        const [deletee, setDeletee] = useState(true);
        const getLibraries = async () => {
            const resultLibraries = await apiRestGet(process.env.NEXT_PUBLIC_BACKEND_URL+'library');
            if(resultLibraries  != null){
                setLibraries(resultLibraries);
            }
        }

        const modifyLibrary = async (id) => {
            setModify(true);
            if(modify){
                router.push('/biblioteca/create?id='+id);
            }
        }

        const deleteLibrary = async (id) => {
            setDeletee(true);
            if(deletee){
                const deleteResult = await apiRestDelete(process.env.NEXT_PUBLIC_BACKEND_URL+'library/'+id);
                if(!deleteResult.error){
                    let libraries = await getLibraries();
                    return;
                }
                console.log(!deleteResult.error)
            }
        }

        const createLibary = async () => {
            let token = await localStorage.getItem('token')
            if(token != null){
                router.push('/biblioteca/create');
            }
            router.push('/login');
        }
        const [libraries, setLibraries] = useState([]);
        useEffect( async() => {
            await getLibraries();
        }, []);
    return (
        <>
            <div className={styles.header}>
                <h1>Book Store</h1>
                <button onClick={createLibary}>
                    <p>Add New Book</p>
                </button>
            </div>
            <div className={styles.table}>
                <table>
                    <thead>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Genre</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {
                           ( libraries.map((library) => (
                                <tr>
                                        <td>{library.title}</td>
                                        <td>{library.author}</td>
                                        <td>{library.publisher}</td>
                                        <td>{library.genre}</td>
                                        <td>{library.price}</td>
                                        <td>

                                        <ButtonGroup size="sm">
                                            <Button variant="warning"
                                                onClick={() =>{ modifyLibrary(library.id)}}
                                            >M</Button>
                                            <Button variant="danger"
                                                onClick={() => {deleteLibrary(library.id)}}
                                            >X</Button>
                                        </ButtonGroup>
                                        </td>
                                </tr>
                            )
                                
                            ))
                        }
                    </tbody>
                    
                </table>
            </div>
        </>
    );
}

export default Biblioteca