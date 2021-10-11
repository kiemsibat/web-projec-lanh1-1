import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import TodoAdd from './components/todo-add';
import TodoList from './components/todo-list';
import './styles.css';

const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h2>xin chao mastered 123</h2>
        <TodoAdd />
        <TodoList />
      </div>
    </ApolloProvider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);