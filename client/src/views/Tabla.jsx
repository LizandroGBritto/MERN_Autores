import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DeleteButton from "../components/DeleteButton";
import axios from 'axios';


const Tabla = ({authors, setAuthors}) => {

        
    const deleteAuthor = (authorId) => {
        setAuthors(authors.filter(author => author._id !== authorId));
    };
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/autor')
            .then(res => {
                setAuthors(res.data.autor)
                setIsLoading(false)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [setAuthors])

    if (isLoading) return <h1>Loading...</h1>;
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHead>
                    <TableHeadCell>Autor name</TableHeadCell>
                    <TableHeadCell>Actions available</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                {authors.map(autor => (
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={autor._id}>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {autor.nombre}
                                </TableCell>
                                <TableCell>
                                    <Link className="btn btn-warning m-2" to={`/${autor._id}/update`}>Actualizar Autor</Link>
                                    <DeleteButton autorID={autor._id} onDelete={deleteAuthor} />
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Tabla