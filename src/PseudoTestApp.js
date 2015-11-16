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
                })}
            </div>
        );
    },
});

module.exports = PseudoTestApp;