var React = require('react');
var Tailorbird = require('index');

var ListItem = (props) => {
    var style = {
        width: 200,
        height: 200,
        ...props.style,
    }
    return (
        <div
            className="test-list-item"
            style={style}
        />
    )
};

var PseudoTestApp = React.createClass({
    render() {
        var items = Array(5).map(() => <ListItem>);
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