import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={['Learn react', 'Learn typescript']} />
    </div>
  );
}

export default App;
