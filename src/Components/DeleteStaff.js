import { Button, Card, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

function DeleteStaff() {
  const history = useHistory();
  const [staffId, setStaffId] = useState("");

  const handleID = (e) => {
    setStaffId(e.target.value);
  };

  const handleDeleteBtn = () => {
    var updateStaff = { staffId: staffId };
    console.log(updateStaff);

    axios
      .post("http://192.168.1.27:3333/netcom/remove", updateStaff)
      .then((response) => {
        console.log(response.data);

        if (response.data["res"] === "deleted") {
          history.push("/home");
        } else {
          alert(response.data["res"]);
        }
      });
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
          Delete Staff
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column", padding: "3%" }}
        >
          <TextField
            style={{ flex: 1 }}
            variant="outlined"
            label="Staff ID"
            type="text"
            onChange={handleID}
          />
          <br />
          <Button variant="contained" color="primary" onClick={handleDeleteBtn}>
            Delete Staff
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default DeleteStaff;
