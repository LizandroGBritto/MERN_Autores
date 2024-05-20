import Form from '../components/Form';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import useForm from '../hooks/useForm';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => { 
    const { id } = useParams();

    const initialValues = {
        nombre: 'cargando...'
    };

    const navigate = useNavigate();

    const { values, handleChange, setValues } = useForm(initialValues);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/autor/${id}`)
            .then(res => {
                console.log(res);
                setValues({
                    nombre: res.data.autor.nombre 
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/autor/${id}`, values) 
            .then(res => {
                console.log(res);
                setError('');
                Swal.fire({
                    icon: 'success',
                    title: 'Excelente',
                    text: 'Actualizaste un autor!',
                });
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                setError(err.response?.data?.error?.message || 'An error occurred');
            });
    };

    return (
        <div className='buyContainer'>
            <div className="buyCard">
                <Form handleSubmit={handleSubmit} error={error} author={values} handleChange={handleChange} />
            </div>
        </div>
    );
};

export default Edit;
