import React from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends React.Component {

    maxId = 42;

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

    addItem = (text) => {
        const newItem = {
            id: this.maxId++,
            label: text,
            important: false,
        };

        this.setState(({ todoData }) => {

            return { todoData: [...todoData, newItem] };
        });
    };

    onToggleImportant = (id) => {
        console.log('Toggle important', id);
    };

    onToggleDone = (id) => {
        console.log('Toggle done', id);
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
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    };
};
