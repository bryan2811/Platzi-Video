import { useEffect, useState } from 'react';

const useInitialState = (API) => {
    // videos: nombre de la variable que estoy asignando para guardar mi estado.
    // setVideos: Me permite actualizar a este estado.
    // useState: Recibe como propiedad elementos para inicializar un estado (string, number, boolean, object, array)
    const [ videos, setVideos ] = useState( {mylist:[], trends:[], originals:[] }); 

    useEffect(() => { // useEffect: Me permite ir a la FakeAPI, traer la información, luego pasarla a la funcion setVideos.
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []); // []: useEffect recibe otro parametro que se encarga de estar escuchando una propiedad que pueda cambiar y asi volver a ejecutarse, si no se le pasa la propiedad generará un loop infinito.
    return videos;
}

export default useInitialState;