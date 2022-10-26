import React from 'react';
import ReactDOM from 'react-dom';

const sohaib="Great";

function shot(a){
  alert(a);
}

const shoot = () => {
  alert("Great Shot!");
}


function Football() {
  return (
    //The following command will not work, so if you pass variable directly in OnClick it will not work.
    //<button onClick={sohaib}>Take the shot!</button>

    //The following command will also not work, because of two reason: 1. It will be executed only once 2. Even that one time executation will be before your first click
    //<button onClick={shot("Great")}>Take the shot!</button>,

    //The following command will work.
    //<button onClick={shoot}>Take the shot!</button> 

    //The following command will also work.
    <button onClick={()=>shot("Hey! Keep it up!")}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

