import React from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends React.Component {

    maxId = 1;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Have a lunch'),
        ],
        term: '',
        filter: 'all', // active, all, done
    };

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label,
            important: false,
            done: false,
        }
    };

    deleteItem = (elemId) => {
        this.setState(({ todoData }) => {
            return {
                todoData: todoData.filter(({ id }) => id !== elemId),
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {

            return { todoData: [...todoData, newItem] };
        });
    };

    toggleProperty(arr, id, propName) {
        const newArray = arr.slice();
        const idx = newArray.findIndex((el) => el.id === id);
        const item = newArray[idx];

        item[propName] = !item[propName];

        return newArray;
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important'),
            };
        });

    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done'),
            };
        });
    };

    onSearchChange = (term) => {
        this.setState({ term });
    };

    onFilterSearch = (filter) => {
      this.setState({ filter });
    };

    search(items, term) {
        if (term.length === 0) return items;

        return items.filter((item) => item.label
            .toLowerCase().indexOf(term.toLowerCase()) > -1);
    };

    filter(items, filter) {
      switch(filter) {
          case 'all':
              return items;
          case 'active':
              return items.filter((item) => !item.done);
          case 'done':
              return items.filter((item) => item.done);
          default:
              return items;
      }
    };

    render() {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.search(todoData, term);
        const filteredItems = this.filter(visibleItems, filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader
                    toDo={todoCount}
                    done={doneCount}
                />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}
                        term={this.state.term}
                    />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterSearch}
                    />
                </div>
                <TodoList
                    todos={filteredItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    };
};
