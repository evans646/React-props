import logo from './logo.svg';
import './App.css';
import Main  from './pages/page';
import {ListComments} from  "./pages/ListComments";

const comments = [{
  username : "Niel",
  text : "I will come again next week!",
},
{
  username : "Dandy",
  text : "Hahaha! i almost did it"
},
{
  username :"Boison",
  text : "He will be the only person to dance",
}];

function App() {
  return (
    <div className="App">
     <Main favoriteColor = "teal"/>
     <ListComments comments = {comments}/>
    </div>
  );
};

export default App;
