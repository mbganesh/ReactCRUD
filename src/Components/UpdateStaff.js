import { Button, Card, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
function UpdateStaff() {
  const history = useHistory();
  const [staffId, setStaffId] = useState("");
  const [staffDetails, setStaffDetails] = useState({
    name: null,
    age: null,
    position: null,
    number: null,
  });
  const handleID = (e) => {
    var id = e.target.value;
    setStaffId(id.toString().trim());
  };

  const handleUpdateBtn = () => {
    var updateStaff = { staffId: staffId, data: staffDetails };
    // console.log(updateStaff);

    if (
      staffDetails.name === null ||
      staffDetails.age === null ||
      staffDetails.position === null ||
      staffDetails.number === null
    ) {
      alert("Please fill all the details");
    } else {
      console.log(updateStaff.data)
      axios
        .post("http://192.168.1.27:3333/netcom/update", updateStaff)
        .then((response) => {
          console.log(response.data);

          if (response.data["message"] === "Updated") {
            history.push("/home");
          } else {
            alert("Mobile number already exists");
          }
        });
    }
  };

  const handleName = (e) => {
    setStaffDetails({ ...staffDetails, name: e.target.value });
  };

  const handleAge = (e) => {
    setStaffDetails({ ...staffDetails, age: e.target.value });
  };

  const handleNumber = (e) => {
    setStaffDetails({ ...staffDetails, number: e.target.value });
  };

  const handlePosition = (e) => {
    setStaffDetails({ ...staffDetails, position: e.target.value });
  };

  const handleCheckBtn = () => {
    var findStaff = { staffId: staffId };
    console.log(staffId);

    if (!staffId.replace(/\s/g, "") == "") {
      axios
        .post("http://192.168.1.27:3333/netcom/find", findStaff)
        .then((response) => {
          console.log(response.data["foundObject"]);

          if ("No_Data_Found" != response.data["foundObject"]) {
            setStaffDetails(response.data["foundObject"]);
          } else {
            alert("No Data Founded.");
            setStaffDetails({});
          }
        });
    } else {
      alert("Enter Staff ID");
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
          Update Staff
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column", padding: "3%" }}
        >
          <div style={{ display: "flex" }}>
            <TextField
              style={{ flex: 1 }}
              variant="outlined"
              label="Staff ID"
              type="text"
              value={staffId}
              onChange={handleID}
            />
            <Button
              variant="outlined"
              color="primary"
              style={{ marginLeft: "1%" }}
              onClick={handleCheckBtn}
            >
              Check
            </Button>
          </div>
          <br />
          <TextField
            variant="outlined"
            label="Name"
            type="text"
            value={staffDetails.name || ""}
            onChange={handleName}
          />
          <br />
          <TextField
            variant="outlined"
            label="Position"
            type="text"
            value={staffDetails.position || ""}
            onChange={handlePosition}
          />
          <br />
          <TextField
            variant="outlined"
            label="Age"
            type="number"
            value={staffDetails.age || ""}
            onChange={handleAge}
          />
          <br />
          <TextField
            variant="outlined"
            label="Number"
            type="number"
            value={staffDetails.number || ""}
            onChange={handleNumber}
          />
          <br />
          <Button variant="contained" color="primary" onClick={handleUpdateBtn}>
            Update Staff
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default UpdateStaff;
