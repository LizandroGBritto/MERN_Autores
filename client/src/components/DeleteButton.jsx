import Swal from 'sweetalert2';
import axios from 'axios';

const DeleteButton = ({autorID, onDelete}) => {

    const handleClick = () => {
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: "No podrás revertir esto!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, eliminar!'

                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete(`http://localhost:8000/api/autor/${autorID}`)
                            .then(res => {
                                console.log(res);
                                onDelete(autorID);
                                Swal.fire(
                                    'Eliminado!',
                                    'El Cliente se ha sido eliminado.',
                                    'success'
                                )
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    }
                });

    };

    return (
        <button className="btn btn-danger m-2 text-red-500" onClick={handleClick}>Eliminar Autor</button>
    );
}


export default DeleteButton