import { Button, Card, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

function AddMessage() {
  const history = useHistory();
  const [messageData, setMessageData] = useState({
    number: "",
    message: "",
  });

  const handleNo = (e) => {
    setMessageData({ ...messageData, number: e.target.value });
  };

  const handleMessage = (e) => {
    setMessageData({ ...messageData, message: e.target.value });
  };

  const handleMessageBtn = () => {
    console.log(messageData);

    axios
      .post("http://192.168.1.27:3333/netcom/add-message", messageData)
      .then((response) => {
        var res = response.data.res;
        var msg = response.data.message;
        console.log(res)
        if (res === "success") {
          history.push("/home");
        } else {
          alert(msg + "\nPlease Create account");
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
          Add Message
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column", padding: "3%" }}
        >
          <TextField
            variant="outlined"
            label="Mobile NO"
            type="text"
            value={messageData.number}
            onChange={handleNo}
          />
          <br />
          <TextField
            variant="outlined"
            label="Message"
            type="text"
            value={messageData.message}
            onChange={handleMessage}
          />
          <br />

          <Button
            variant="contained"
            color="primary"
            onClick={handleMessageBtn}
          >
            Add Message
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddMessage;
