import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import styles from './Todos.module.css';

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosContext.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onTodoClick={todosContext.removeTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
