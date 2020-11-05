import React, {useState, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { pegaPostPorId } from '../../services/post-service';

const ComentariosPage = () => {
    const match = useRouteMatch();
    const [post, setPost]  = useState({});

    useEffect(() => {
        pegaPostPorId(match.params.id)
            .then(data => setPost(data));
    }, []);

    return (<div>
        { JSON.stringify(post) }
        Página de Comentários <Link className="btn btn-primary" to="/home">Voltar</Link>
    </div>)
}


export default ComentariosPage;