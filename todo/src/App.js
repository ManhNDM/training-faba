import './App.css';
import './App-Base.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import { useStore } from "./context";



function App() {
  const [state] = useStore();
  const { todos } = state;
  return (
    <section className="todoapp">
      <Header/>
        <TodoList/>
      {todos.length > 0 && <Footer/>}
    </section>
  );
}

export default App;
