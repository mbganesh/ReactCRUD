import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@material-ui/core";

function ReadStaff() {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.27:3333/netcom/staff-list").then((response) => {
      setStaffList(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {staffList.map((object, index) => (
          <Card
            style={{
              margin: "2%",
              padding: "1%",
              backgroundColor: "#423F3E",
              color: "#fff",
            }}
          >
            <b>Staff Id</b> : {object.staffId} <br />
            <b>Name</b> : {object.name} <br />
            <b>Age</b> : {object.age} <br />
            <b>Position</b> : {object.position} <br />
            <b>Mobile No</b> : {object.number}
          </Card>
        ))}
      </Card>
    </div>
  );
}

export default ReadStaff;
