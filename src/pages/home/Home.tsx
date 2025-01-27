
function Home() {
    return (
        <>
            <div className="bg-white-900 flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        FARMALIFE
                        </h2>
                        <p className='text-xl'>
                            A farmácia preferida do brasileiro
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-black 
                                            border-blue border-solid border-2 py-2 px-4'
                                >
                                Nova categoria
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="src/assets/farma.jpg"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home