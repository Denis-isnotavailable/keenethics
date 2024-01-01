import './App.css';
import BikesForm from './components/BikesForm/BikesForm';
import BikesList from './components/BikesList/BikesList';
import SharedLayout from './components/SharedLayout/SharedLayout';
import StatsBlock from './components/StatsBlock/StatsBlock';

function App() {
  return (
    <div className="App">
      <SharedLayout>

        <div className='main-container'>
          <BikesList />

          <div className='stats-container'>
            <BikesForm />
            <StatsBlock />
          </div>
        </div>       

      </SharedLayout>      
    </div>
  );
}

export default App;
