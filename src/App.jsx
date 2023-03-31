import "./style.scss";
import DeashItems from "./components/DeashIem/DeashItem";
import ActiveItems from "./components/ActiveItems/ActiveItems";
import { useSelector } from 'react-redux';

function App() {
  const actItems = useSelector((state) => state.appSlicer.value)
  return (
    <div className="App">
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Список задач</h1>
        </div>
        <div className="dashboard-content">
          <DeashItems />
        </div>
        <div className="ActiveItems">
          {
            actItems.map( (items, key) => <ActiveItems key={key} {...items}/>)
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
