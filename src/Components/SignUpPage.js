import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import BgImage from "./bg.jpg";

const styles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(" + BgImage + ")",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "100% 100%",

    margin:0,
    padding:0,
    width: "100vw",
    height: "100vh",
  },
}));

function SignUpPage() {
  const cls = styles();
  return (
    <div  style={{  background: `url(${BgImage})`, }} >
      
      <h1>Page Title</h1>
      <p>lorem</p>
    </div>
  );
}

export default SignUpPage;
