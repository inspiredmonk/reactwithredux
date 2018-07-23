import React from "react";
import List from "./List";
import Form from "./Form";
import ListCount from "./ListCount";

const App = () => (
  <div>
    <div className="row mt-5">
      <div className="col-md-8 offset-md-1">
        <h2>Articles Count</h2>
        <ListCount />
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  </div>
);

export default App;
