import React from 'react';

import { Button } from 'react-bootstrap';


function ComentariosPage(props) {
    return (<div>
        Página de Comentários <Button onClick={ props.mostraComentario }>Voltar</Button>
        </div>)
}


export default ComentariosPage;