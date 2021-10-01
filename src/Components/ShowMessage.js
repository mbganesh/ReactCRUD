import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@material-ui/core";

function ShowMessage() {

    const [messageList, setmessageList] = useState([]);

    useEffect(() => {
      axios.get("http://192.168.1.27:3333/netcom/show-message").then((response) => {
        setmessageList(response.data);
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
          {messageList.map((object, index) => (
            <Card
              style={{
                margin: "2%",
                padding: "1%",
                backgroundColor: "#423F3E",
                color: "#fff",
              }}
            >
              <b>Mobile No</b> : {object.number}<br/>
              <b>Message</b> : {object.message} 
            </Card>
          ))}
        </Card>
      </div>
    )
}

export default ShowMessage
