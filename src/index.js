var React = require('react');
var firstChild = require('pseudo-reducers/first-child');
var Tailorbird = () => {};

var pseudoReducer = [firstChild];

Tailorbird.Children = {
    map: (children, style) => {
        var len = children.length;
        return children.map((c, i)) => {
            var originalStyle = c.props.style;

            var newStyle = pseudoList.reduce((previousStyle, reducer) => {
                return reducer(previousStyle, c, i, len);
            }, style);

            React.cloneElement(c, {
                style: {
                    ...originalStyle,
                    ...newStyle,
                },
            });
        })
    },
};

module.exports = Tailorbird;