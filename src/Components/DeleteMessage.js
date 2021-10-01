import { Button, Card, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

function DeleteMessage() {
    
  const history = useHistory();
  const [staffNo, setstaffNo] = useState(null);

  
  const handleID = (e) => {
    setstaffNo(e.target.value);
  };

  const handleDeleteBtn = () => {
    var staffData = { staffNo: staffNo };
    console.log(staffData);
    if(staffNo != null){
        axios
        .post("http://192.168.1.27:3333/netcom/remove-message", staffData)
        .then((response) => {
          console.log(response.data);
  
          if (response.data["message"] != "No_Data_Found") {
            history.push("/home");
          } else {
            alert(response.data["message"]);
          }
        });
    }else{
        alert("Please enter staff number")
    }
  };
  
    return (
        <div>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            margin: "auto",
            marginTop: "5%",
            border: "1px solid #333",
            borderRadius: "2%",
          }}
        >
          <Typography
            style={{
              textAlign: "center",
              fontSize: "24px",
              padding: "2%",
              fontWeight: "bold",
            }}
          >
            Delete Message
          </Typography>
          <form
            style={{ display: "flex", flexDirection: "column", padding: "3%" }}
          >
            <TextField
              style={{ flex: 1 }}
              variant="outlined"
              label="Staff Number"
              type="text"
              onChange={handleID}
            />
            <br />
            <Button variant="contained" color="primary" onClick={handleDeleteBtn}>
              Delete Message
            </Button>
          </form>
        </Card>
      </div>
    )
}

export default DeleteMessage
