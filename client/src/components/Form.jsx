
const Form = ({ handleSubmit, error, author, handleChange }) => {
    return (
        <>
            <div className="text-danger">{error}</div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12 flex justify-center">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3 ">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900" >Nombre Completo</label>
                                <div className="mt-2">
                                    <input value={author.nombre} onChange={handleChange} type="text" name="nombre" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </form>

        </>

    )
}



export default Form;