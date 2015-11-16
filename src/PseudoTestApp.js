var React = require('react');
var Tailorbird = require('./index.js');

var ListItem = (props) => {
    var style = {
        width: 200,
        height: 200,
        ...props.style,
    };

    return (
        <div
            className="test-list-item"
            style={style}
        />
    )
};

var PseudoTestApp = React.createClass({
    render() {
        var items = [];
        for (var i = 0; i < 5; i++) {
            items.push(<ListItem />);
        }
        return (
            <div>
                {Tailorbird.Children.mapStyles(items, {
                    ':first-child': {
                        backgroundColor: 'green',
                    },

                    ':last-child': {
                        backgroundColor: 'red',
                    },

                    ':nth-child(odd)': {
                        color: 'blue',
                    },

                    ':nth-child(even)': {
                        color: 'white',
                    },

                    ':nth-child(2n+3)': {
                        color: 'orange'
                    },

                    ':nth-child(even):last-child': {
                        borderColor: 'yellow'
                    },
                })}
            </div>
        );
    },
});

module.exports = PseudoTestApp;