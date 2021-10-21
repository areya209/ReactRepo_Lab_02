import { useState } from "react";
import { Viewtodolist } from "./components/Viewtodolist";
import { Addtodolist } from "./components/Addtodolist";

export const App = () => {
  const [posts, setPosts] = useState([]);

  const handleDelete = () => {
    setPosts([]);
  };

  const addTodolist = (newTodolist) => {
    setPosts([...posts, newTodolist]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Addtodolist addTodolist={addTodolist} />
        </div>
        <div className="col-6">
          <Viewtodolist
            posts={posts}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};
