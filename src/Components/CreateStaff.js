import { Button, Card, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

function CreateStaff() {
  const history = useHistory();
  const [staffData, setStaffData] = useState({
    name: "",
    position: "",
    age: "",
    number: "",
  });

  const handleName = (e) => {
    setStaffData({ ...staffData, name: e.target.value });
  };

  const handlePosition = (e) => {
    setStaffData({ ...staffData, position: e.target.value });
  };

  const handleAge = (e) => {
    setStaffData({ ...staffData, age: e.target.value });
  };

  const handleNumber = (e) => {
    setStaffData({ ...staffData, number: e.target.value });
  };

  const handleCreateBtn = () => {
    console.log(staffData);

    axios
      .post("http://192.168.1.27:3333/netcom/create-staff", staffData)
      .then((response) => {
        if (response.data["message"] === "ok") {
          history.push("/home");
        }else{
          alert("Mobile number already exists")
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
          borderRadius: "5%",
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
          Create Staff
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column", padding: "3%" }}
        >
          <TextField
            variant="outlined"
            label="Name"
            type="text"
            value={staffData.name}
            onChange={handleName}
          />
          <br />
          <TextField
            variant="outlined"
            label="Position"
            type="text"
            value={staffData.position}
            onChange={handlePosition}
          />
          <br />
          <TextField
            variant="outlined"
            label="Age"
            type="number"
            value={staffData.age}
            onChange={handleAge}
          />
          <br />
          <TextField
            variant="outlined"
            label="Number"
            type="number"
            value={staffData.number}
            onChange={handleNumber}
          />
          <br />
          <Button variant="contained" color="primary" onClick={handleCreateBtn}>
            Create Staff
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default CreateStaff;
