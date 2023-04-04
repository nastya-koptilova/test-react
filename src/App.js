import { useState } from "react";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import userInfo from "./data/userInfo.json";
import { CustomersList } from "./Components/CustomersList/CustomersList";

function App() {
  const [user, setUser] = useState(userInfo);
  return (
    <>
      <Sidebar user={user} />
      <CustomersList user={user}/>
    </>
  );
}

export default App;
