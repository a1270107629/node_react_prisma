import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Demo from './Demo';

// ReactDOM.render(<Demo />, document.getElementById('root'))


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Demo />
    </React.StrictMode>
);
