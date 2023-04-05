import { useState } from "react";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import userInfo from "./data/userInfo.json";
import { CustomersList } from "./Components/CustomersList/CustomersList";
import s from "./App.module.scss";

function App() {
  const [user, setUser] = useState(userInfo);
  return (
    <div className={s.container}>
      <Sidebar user={user} />
      <CustomersList user={user} />
    </div>
  );
}

export default App;
