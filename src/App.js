import Todo from './components/Todo'
import Modal from './components/Modal'
function App() {
  return(
  <div>
    <h1>My Todos</h1>
    {/* Passing the Todo component. */}
    <Todo text='Learn React'/>
    <Todo text='Master'/>
    <Todo text='Explore'/>
    <Modal />
  </div>
  );
}

export default App;
