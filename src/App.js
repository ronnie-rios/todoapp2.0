import DisplayTodos from "./components/DisplayTodos";

function App() {
  const data = [
    {id: 1, title: 'enter a todo', description: 'enter a brief description'}
  ]
  return (
    <div className='place-contentcenter grid grid-cols-1'>
      <h2 className="text-3xl font-bold underline">To - Do App</h2>
        <DisplayTodos todos={data}/>
    </div>
  );
}

export default App;
