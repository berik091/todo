import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import Todolist from "./components/todo-list";
import SearchPanel from "./components/search-panel";

const App=()=>{
    const loginBox= <span>Log in please</span>;
    return(
        <div>
            {/*{loginBox}*/}
            <AppHeader />
            <SearchPanel />
            <Todolist />
        </div>
    );
};

ReactDOM.render(<App/>,
    document.getElementById('root'));