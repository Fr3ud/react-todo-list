import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

const AppHeader = () => (<h1>To-Do List</h1>);
const SearchPanel = () => (<input placeholder="search" />);
const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
};
const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
