import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TodoList = ({
    data,
    checked,
onHandleDeleteTodo,
onHandleCheckedTodo,
}) => {
    return (
      
           <li className="todo-item">
                        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                        <button className="check-btn" onClick ={() => onHandleCheckedTodo(data)}  >
                            <FaCheck />
                        </button>
                        <button className="delete-btn"  onClick={() => onHandleDeleteTodo(data)}>
                        <MdDelete />
                        </button>
                    </li>

    )
}