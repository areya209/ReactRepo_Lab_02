import { Todolist } from "../Todolist";

export const Viewtodolist = (props) => {
  return (
    <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1>View Your ToDoList Lists</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete Your Todolist
      </button>
      {props.posts.map((p) => (
        <Todolist title={p.title} body={p.body} />
      ))}
    </div>
  );
};
