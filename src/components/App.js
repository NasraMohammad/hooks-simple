import React, { useState } from "react";
import ResourceList from "./ResourceList";
const App = () => {
  const [resource, setResource] = useState("potato");
  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
    //  {resource}
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
