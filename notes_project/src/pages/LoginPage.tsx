import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function mensagem( title: string, icon: 'warning' | 'error' | 'success' | 'info' | 'question' ){
    Swal.fire({
        title: title,
        icon: icon,
        confirmButtonText: 'Ok'
      });
}

const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/user/login', {
      email: email,
      password: password
    });
    
    const id = response.data.user_id;
    const username = response.data.username;

    if(response.data.user_id && response.data.username){
      mensagem(`Login sucessfully ${username}`,'success')
      localStorage.setItem('id_user', id);
      localStorage.setItem('username', username);
      window.location.href = '/loged/';
    }else{
      mensagem(`Error: ${response.data}`,'error')
    }
    }
  catch(error){
    mensagem(`Erro ao realizar login: ${error}`,'error')
  }
};

  return (
    <>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-repeat w-full h-screen justify-center flex items-center">
      <form onSubmit={handleSubmit} className="flex flex-col bg-slate-900/85 md:w-1/4 md:h-1/2 text-white text-center justify-center content-center rounded-md box-border font-bold text-base items-center">
        <label htmlFor="email">Email:</label>
        <input className="bg-transparent text-center border-2 border-solid border-slate-500 rounded-md outline-green-400 p-2 md:w-1/2 placeholder:text-slate-300 m-1" 
        type="email" 
        placeholder="Enter with yor email"
        id="email"
        value={email}
        onChange={(e)=>
          setEmail(e.target.value)} 
        />
        <label htmlFor="password">Password:</label>
        <input className="bg-transparent text-center border-2 border-solid border-slate-500 rounded-md outline-green-400 p-2 md:w-1/2 placeholder:text-slate-300 m-1" 
        type="password" 
        placeholder="Enter with yor password"
        id="password"
        value={password}
        onChange={(e)=>
          setPassword(e.target.value)} 
        />
        <div className="flex flex-row">
          <button className="bg-green-500 border-solid border-2 text-center p-3 m-2 rounded-md hover:bg-green-800" type="submit">Login</button>
          <Link to="/signup">
            <button className="bg-slate-500 border-solid border-2 text-center p-3 m-2 rounded-md hover:bg-slate-600" type="button">Create Login</button>
          </Link>
      </div>
        <a href="" className="text-red-400">Forget your password?</a>
      </form>
    </div>
  </>
  );
}
