import { Sidebar } from "./Components/Sidebar/Sidebar";
import userInfo from "./data/userInfo.json";
import { CustomersList } from "./Components/CustomersList/CustomersList";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.container}>
      <Sidebar user={userInfo} />
      <CustomersList user={userInfo} />
    </div>
  );
}

export default App;
