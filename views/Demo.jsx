const React = require('react');


class Demo extends React.Component {
    render () {
        return (
            <>
                <head>
                    <link rel='stylesheet' href='styles/style.css'/>
                </head>
                <h1>This is a demonstration</h1>
                <p> And then I can add some things</p>
                <img src='https://images.unsplash.com/photo-1732540988407-1f38cf012f0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D'/>
            </>
        )
    }
}

module.exports = Demo;