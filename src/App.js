import logo from './logo.svg';
import './App.css';
//<img src= "robinhoodImage.png" alt="robinhoodImage" width= "50"></img>
function App() {
  return (
    <div class= "topnav">
      <a class="active" href="#home"><img src= "robinhoodImage.png" alt="robinhoodImage" width= "50"></img></a>
      <input type ="text" placeholder = "Search"></input>
      <a href ="#rewards">Rewards</a>
      <a href ="#rewards">Investing</a>
      <a href ="#rewards">Crypto</a>
      <a href ="#rewards">Spending</a>
      <a href ="#rewards">Retirement</a>
      <a href ="#rewards">Notifications</a>
      <a href ="#rewards">Account</a>
    </div>
  );
}

export default App;
