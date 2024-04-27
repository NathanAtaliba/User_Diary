import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export function SignupForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    if(password === confirmPassword){
      const response = await axios.post('http://localhost:3000/user/register', {
        username: username,
        email: email,
        password: password,
      });
      if(response.data === 'User created with successful!'){
        window.alert(response.data);
        setUsername("")
        setEmail("")
        setPassword("")
        setconfirmPassword("")
      }else{
        window.alert(response.data);
      }
      }
      else{
        window.alert("Password and password confirmation are not the same")
        setUsername("")
        setEmail("")
        setPassword("")
        setconfirmPassword("")
      }
    }
    catch(error){
      window.alert('Erro ao realizar login:'+ error);
    }
};

    return(
        <>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-repeat w-full h-screen justify-center flex items-center">
      <form onSubmit={handleSubmit} className="flex flex-col bg-slate-900/85 md:w-1/4 md:h-1/2 text-white text-center justify-center content-center rounded-md box-border font-bold text-base items-center">
      <label htmlFor="username">Username:</label>
        <input className="bg-transparent text-center border-2 border-solid border-slate-500 rounded-md outline-green-400 p-2 md:w-1/2 placeholder:text-slate-300 m-1" 
        type="text" 
        placeholder="Enter with your username"
        id="username"
        value={username}
        onChange={(e)=>
          setUsername(e.target.value)} 
        />

        <label htmlFor="email">Email:</label>
        <input className="bg-transparent text-center border-2 border-solid border-slate-500 rounded-md outline-green-400 p-2 md:w-1/2 placeholder:text-slate-300 m-1" 
        type="email" 
        placeholder="Enter with your email"
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

        <label htmlFor="confirmPassword">Confirm password:</label>
        <input className="bg-transparent text-center border-2 border-solid border-slate-500 rounded-md outline-green-400 p-2 md:w-1/2 placeholder:text-slate-300 m-1" 
        type="password" 
        placeholder="Enter with your password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e)=>
          setconfirmPassword(e.target.value)} 
        />

        <div className="flex flex-row">
          <button className="bg-green-500 border-solid border-2 text-center p-3 m-2 rounded-md hover:bg-green-700" type="submit">Create Login</button>
          <Link to="/login">
            <button className="bg-slate-500 border-solid border-2 text-center p-3 m-2 rounded-md hover:bg-slate-600">Back</button>
          </Link>
        </div>
        <a href="" className="text-red-400">Forget your password?</a>
      </form>
    </div>
  </>
    )
}
