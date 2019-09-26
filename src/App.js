import React from 'react';

import './styles/App.css';
import Article from './components/Article';
import CommentsList from './components/CommentsList';

function App() {
  return (
    <div className="App">
      <Article/>
      <CommentsList/>
    </div>
  );
}

export default App;
