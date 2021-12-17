import React, {FC, useState} from "react";
import './App.css';

const Github: FC = ()=>{
    const [user, setUser] = useState({name:'', login: '', avatar_url: '', type: '', bio: '', company: '', blog: '', id: '', email: '', twitter_username: '', followers: '', following: '', location: '', created_at: '', updated_at: ''}); 
    const [searchName, setSearchName] = useState('');
    const [ notfound, setNotFound] = useState(false);

    const getGithubUser = async () => {
        const response = await fetch('https://api.github.com/users/'+ searchName);
        setNotFound(false);
        if(response.status !== 404){
            const data = await response.json();
            const user = data;
            setUser(user);
        } else {
            setNotFound(true);
        }
    };

    return <>
    <header className="h-and-f">
            <h1 className="center w-text">GitHub API Project</h1>
            <div className="flex-centralizado">
                <input type="text" onChange={(e)=>{setSearchName(e.target.value)}} placeholder="Digite o Nome Aqui" />
                <button onClick={()=>{getGithubUser()}} type="button">Pesquisar</button>
            </div>
                {notfound === true ? <h3 className="w-text center">Usúario não encontrado!</h3> : <></>}
    </header>
        <div className="div">
                <h5 className="w-text center">Nome: {user.name}</h5>
                <h5 className="w-text center">Nome de Usúario: {user.login}</h5>
                <img alt="" className="center-photo" src={user.avatar_url}/>
                <h5 className="w-text center margin-text">Tipo: {user.type}</h5>
                <h5 className="w-text center margin-text">Bio: {user.bio}</h5>
                <h5 className="w-text center margin-textt">Companhia: {user.company}</h5>
                <h5 className="w-text center margin-textt">Blog: {user.blog}</h5>
                <h5 className="w-text center margin-text">ID: {user.id}</h5>
                <h5 className="w-text center margin-text">E-mail: {user.email}</h5>
                <h5 className="w-text center margin-text">Nome de Usúario do Twitter: {user.twitter_username}</h5>
                <h5 className="w-text center margin-text">Seguidores: {user.followers}</h5>
                <h5 className="w-text center margin-text">Seguindo: {user.following}</h5>
                <h5 className="w-text center margin-text">Localização: {user.location}</h5>
                <h5 className="w-text center margin-text">Criado em: {user.created_at}</h5>
                <h5 className="w-text center margin-text">Atualizado em: {user.updated_at}</h5>
        </div>

    <footer className="h-and-f">
        <h5 className="center w-text">Este WebSite Foi Criado e Atualizado no Ano de 2021 Por Pablo Monteiro Da Silva.</h5>
        <h5 className="center w-text">Este WebSite Mostra Apenas Informações Públicas Dos Usúarios do GitHub.</h5>
        <h5 className="center w-text">Este Website Não Possui Copyright.</h5>
    </footer>
    </>
};

export default Github;