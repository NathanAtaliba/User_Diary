import Note from "../components/Note";
import { useState } from "react";
import axios from "axios";
export function LogedPage() {

    const [title, setTitle] = useState('');

    const handleClick = async ()=>{
        try {
            const response = await axios.post('https://localhost:3000/', {
                title: title
            });
            if(response.data === 'Note created with success!'){
                window.alert("Note created with success!")
            }else{

            }
            console.log('Resposta do servidor:', response.data);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

return(
<>
<div className="bg-slate-900 w-full h-screen justify-center flex items-center relative">
    <div className="bg-slate-700 w-3/4 h-3/4 rounded-md">
        <div className="bg-slate-600 relative rounded-md h-1/6 flex flex-row text-2xl m-2 justify-center items-center">
            <h1 className="left-0 h-full rounded-md absolute text-center flex justify-center items-center w-1/4 text-white">Username</h1>
            <input className="w-2/4 h-3/4 bg-slate-600 right-0 text-center rounded-md text-black outline-green-400 m-2 border-2 border-solid border-slate-700 placeholder:text-bg-white"
            type="text"
            placeholder="Note title"
            value={title}
            id='title'
            />
            <button className="bg-green-400 absolute right-0 m-2 p-8 rounded-full text-center hover:bg-green-600 text-white" onClick={handleClick}>Add note</button>
        </div>
        <div className="bg-slate-600 m-2 my-5 relative rounded-md h-4/6 overflow-y-scroll">
            <Note></Note>
        </div>
    </div>
</div>
</>
)

}



