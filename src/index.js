var React = require('react');
var firstChild = require('./pseudo-reducers/first-child.js');
var lastChild = require('./pseudo-reducers/last-child.js');

var pseudoReducers = [firstChild, lastChild];

var Tailorbird = () => {};

Tailorbird.Children = {
    mapStyles: (children, style) => {
        var len = children.length;
        return children.map((c, i) => {
            var originalStyle = c.props.style;

            var newStyle = pseudoReducers.reduce((previousStyle, reducer) => {
                return reducer(previousStyle, c, i, len);
            }, style);

            return React.cloneElement(c, {
                key: c.props.key || i,
                style: {
                    ...originalStyle,
                    ...newStyle,
                },
            });
        });
    },
};

module.exports = Tailorbird;