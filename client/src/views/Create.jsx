import Form from '../components/Form';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useForm from '../hooks/useForm';
import { Link, useNavigate } from 'react-router-dom';

const Create = ({ updateAuthor }) => {

    const initialValues = {
        nombre: ''
    }

    const navigate = useNavigate();

    const { values: author, handleChange, clearData } = useForm(initialValues);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/autor/new', author)
            .then(res => {
                console.log(res);
                updateAuthor(res.data.autor);
                clearData();
                setError('');
                Swal.fire({
                    icon: 'success',
                    title: 'Excelente',
                    text: 'Agregaste un nuevo autor!',
                });
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                setError(err.response?.data?.error?.message || 'An error occurred');
            });
    };


    return (
        <div className='buyContainer' >
            <div className="buyCard">
                <Form handleSubmit={handleSubmit} error={error} author={author} handleChange={handleChange} />
            </div>
        </div>
    )
}

export default Create