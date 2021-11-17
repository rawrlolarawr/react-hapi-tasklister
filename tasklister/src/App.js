import './styles/App.css'
import Header from './components/Header.js'
import TaskContainer from './containers/TaskContainer.js'

function App() {
  return (
    <div id="App">
      <Header title='TaskLister™' />
      <TaskContainer />
    </div>
  );
}

export default App;
