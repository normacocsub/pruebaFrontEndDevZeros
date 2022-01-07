import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/pages/biblioteca/biblioteca.module.scss';

const Biblioteca = () => {
    return (
        <>
            <div className={styles.header}>
                <h1>Book Store</h1>
                <button>
                    
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
                        <tr>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                        </tr>
                        <tr>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                            <td>hola</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </>
    );
}

export default Biblioteca