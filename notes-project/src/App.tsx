import React, { useState } from "react";
import axios from 'axios';
export function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/user/login', {
      email: email,
      password: password
    });

    if(response.data === 'Login successful!'){
      window.alert(response.data);
    }else{
      window.alert(response.data);
    }
    }
  catch(error){
    window.alert('Erro ao realizar login:'+ error);
  }
};

function changeButtons(){
  
}
  return (
    <>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-repeat w-full h-screen justify-center flex items-center">
      <div className="bg-white md:w-48 md:h-1/2 rounded-md">

      </div>
      <form onSubmit={handleSubmit} className="flex flex-col bg-slate-900/85 md:w-1/4 md:h-1/2 text-white text-center justify-center content-center rounded-md box-border font-bold text-base items-center">
        <label htmlFor="email">Email:</label>
        <input className="bg-transparent text-center border-2 border-solid border-slate-500 rounded-md outline-green-400 p-2 md:w-1/2 placeholder:text-slate-300 m-1" 
        type="text" 
        placeholder="Enter with yor email"
        id="email"
        value={email}
        onChange={(e)=>
          setEmail(e.target.value)} 
        />
        <label htmlFor="password">Password:</label>
        <input className="bg-transparent text-center border-2 border-solid border-slate-500 rounded-md outline-green-400 p-2 md:w-1/2 placeholder:text-slate-300 m-1" 
        type="text" 
        placeholder="Enter with yor password"
        id="password"
        value={password}
        onChange={(e)=>
          setPassword(e.target.value)} 
        />
        <div className="flex flex-row">
          <button className="bg-green-500 border-solid border-2 text-center p-3 m-2 rounded-md hover:bg-green-800" type="submit">Login</button>
          <button className="bg-slate-500 border-solid border-2 text-center p-3 m-2 rounded-md hover:bg-slate-600" type="button" onClick={changeButtons}>Create Login</button>
        </div>
        <a href="" className="text-red-400">Esqueceu a senha ?</a>
      </form>
    </div>
  </>
  );
}
