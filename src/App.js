import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage";
import HomePage from "./Components/HomePage";
import CreateStaff from "./Components/CreateStaff";
import UpdateStaff from "./Components/UpdateStaff";
import ReadStaff from "./Components/ReadStaff";
import AppbarPage from "./Components/AppbarPage";
import DeleteStaff from "./Components/DeleteStaff";
import AddMessage from "./Components/AddMessage";
import ShowMessage from "./Components/ShowMessage";
import DeleteMessage from "./Components/DeleteMessage";


function App() {
  return (
    <div>
      <AppbarPage />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/create" component={CreateStaff} />
        <Route exact path="/update" component={UpdateStaff} />
        <Route exact path="/read" component={ReadStaff} />
        <Route exact path="/delete" component={DeleteStaff} />
        <Route exact path="/add-message" component={AddMessage} />  
        <Route exact path="/show-message" component={ShowMessage} />      
        <Route exact path="/delete-message" component={DeleteMessage} />      
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
