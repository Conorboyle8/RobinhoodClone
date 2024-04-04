import './App.css';

function App() {
  return (
    <div className = "App">
      <div class= "topnav">
        <img src= "robinhoodImage.png" alt="robinhoodImage" width= "50"></img>
        <a class="active" href="#home"></a>
        <input type ="text" placeholder = "Search"></input>
        <a href ="#rewards">Rewards</a>
        <a href ="#rewards">Investing</a>
        <a href ="#rewards">Crypto</a>
        <a href ="#rewards">Spending</a>
        <a href ="#rewards">Retirement</a>
        <a href ="#rewards">Notifications</a>
        <a href ="#rewards">Account</a>
      </div>
      <table>
        <tr>
          <th>Stocks</th>
        </tr>
        <tr>Apple ---- $171.40</tr>
        <tr>Tesla ---- $173.13</tr>
        <tr>Nvidia ---- $894.49</tr>
        <tr>SPY ---- $522.53</tr>
      </table>
      </div>
      
  );
}
export default App;
