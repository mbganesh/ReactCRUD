import { Button } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

function HomePage() {
 
  const history = useHistory();

  const handleCreateBtn = () => {
    history.push({
      pathname: "/create",
    });
  };
  const handleUpdateBtn = () => {
    history.push({
      pathname: "/update",
    });
  };
  const handleReadBtn = () => {
    history.push({
      pathname: "/read",
    });
  };
  const handleDeleteBtn = () => {
    history.push({
      pathname: "/delete",
    });
  };

  const handleAddMessageBtn = () => {
    history.push({
      pathname: "/add-message",
    });
  };
  
  const handleShowMessageBtn = () => {
    history.push({
      pathname: "/show-message",
    });
  };

  const handleDeleteMessageBtn = () => {
    history.push({
      pathname: "/delete-message",
    });
  };
  

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "2%",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleCreateBtn}>
          Create Staff
        </Button>
        <Button variant="contained" color="primary" onClick={handleReadBtn}>
          Read Staff
        </Button>
        <Button variant="contained" color="primary" onClick={handleUpdateBtn}>
          Update Staff
        </Button>
        <Button variant="contained" color="primary" onClick={handleDeleteBtn}>
          Delete Staff
        </Button>
        
      </div>
    
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "2%",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleAddMessageBtn}>
          Add Message
        </Button>

        <Button variant="contained" color="primary" onClick={handleShowMessageBtn}>
          Show Message
        </Button>

        <Button variant="contained" color="primary" onClick={handleDeleteMessageBtn}>
          Delete Message
        </Button>
        
        
      </div>
    
    </div>
  );
}

export default HomePage;
