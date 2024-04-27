import Note from "../components/Note"
export function LogedPage() {
return(
<>
<div className="bg-slate-900 w-full h-screen justify-center flex items-center relative">
    <div className="bg-slate-700 w-3/4 h-3/4 rounded-md">
        <div className="bg-slate-600 relative rounded-md h-1/6 flex flex-row text-2xl m-2 justify-center items-center">
            <h1 className="left-0 h-full rounded-md absolute text-center flex justify-center items-center w-1/4">Username</h1>
            <input className="w-4/12 h-3/4 bg-slate-600 text-center rounded-md text-white m-2"
            type="text"
            />
            <button className="bg-green-400 absolute right-0 m-2 p-8 rounded-full text-center hover:bg-green-600">Add note</button>
        </div>
        <div className="bg-slate-600 m-2 my-5 relative rounded-md h-4/6 overflow-y-scroll">
            <Note></Note>
        </div>
    </div>
</div>
</>
)
}