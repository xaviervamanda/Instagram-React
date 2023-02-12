// Forma antiga de se chamar o ReactDOM

// import  ReactDOM  from "react-dom";
// import App from "./Components/App";
// ReactDOM.render(<App />, document.querySelector(".root"));



// Após a versão 18 essa é a nova forma de chamar o ReactDOM e de renderizar na tela o App,
// pois a função render não é mais usada:

import  ReactDOM  from "react-dom/client";
import React from "react";
import App from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


