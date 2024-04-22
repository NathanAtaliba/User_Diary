export function App() {
  return (
    <>
    <div className="bg-slate-500 w-full h-screen justify-center content-center">
      <form className="flex flex-col bg-slate-900 md:w-1/4 md:h-1/2 text-white text-center justify-center content-center rounded-md box-border font-bold text-base items-center">
        <label>Email:</label>
        <input className="bg-transparent text-center border-2 border-solid border-slate-500 rounded-md outline-green-400 p-2 w-1/2 placeholder:text-slate-300 m-1" type="text" placeholder="Enter with yor email"/>
        <label>Password:</label>
        <input className="bg-transparent text-center border-2 border-solid border-slate-500 rounded-md outline-green-400 p-2 w-1/2 placeholder:text-slate-300 m-1" type="text" placeholder="Enter with yor password"/>
        <div className="flex flex-row">
          <button className="bg-green-500 border-solid border-2 text-center p-3 m-2 rounded-md ">Login</button>
          <button className="bg-slate-500 border-solid border-2 text-center p-3 m-2 rounded-md ">Create Login</button>
        </div>
        <a href="" className="text-red-400">Esqueceu a senha ?</a>
      </form>
    </div>
  </>
  );
}
