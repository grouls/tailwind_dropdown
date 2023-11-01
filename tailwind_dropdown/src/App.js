import "./App.css";

import Dropdown from './Dropdown';

function App() {
  const icon = { src : "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80", alt : "Your Aavatar" }
  const options = [
    { label : "Account Settings"},
    { label : "Support"},
    { label : "Sign out"}
  ];
  return (
    <Dropdown icon={icon} options={options}/>
  );
}

export default App;
