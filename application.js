const element = React.createElement(
    'div', { class: "parent" }, 
    React.createElement('div', { class: "child" }, 
    React.createElement('h1', { class: "heading" }, "this is a heading using internale react cdn")));

    const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);