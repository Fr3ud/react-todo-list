import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const rootElement = document.getElementById('root');

const App = () => {
    const todoData = [
        { id: 1, label: 'Drink Coffee', important: false },
        { id: 2, label: 'Build React App', important: true },
        { id: 3, label: 'Have a lunch', important: false },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
