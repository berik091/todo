import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import Todolist from "./components/todo-list";
import SearchPanel from "./components/search-panel";
import ItemStatusFilter from "./components/item-filter-status";

const App=()=>{

    const todoData=[
        {label: 'Drink Coffee1', important: false, id:1},
        {label: 'Make Awesome App', important: true, id:2},
        {label: 'Have a lunch', important: false, id:3},
    ];
    return(
        <div className='mr-2'>
            <AppHeader />
            <div className='d-flex justify-content-between'>
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <Todolist  todos={todoData}/>
        </div>
    );
};

ReactDOM.render(<App/>,
    document.getElementById('root'));