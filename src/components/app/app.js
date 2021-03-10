import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';

import './app.css';

export default class App extends React.Component {

    state = {
        todoData: [
            { id: 1, label: 'Drink Coffee', important: false },
            { id: 2, label: 'Build React App', important: true },
            { id: 3, label: 'Have a lunch', important: false },
        ],
    };

    deleteItem = (elemId) => {
        this.setState(({ todoData }) => {
            return {
                todoData: todoData.filter(({ id }) => id !== elemId),
            };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }
                />
            </div>
        );
    };
};
