var React = require('react');
var PseudoReducers = require('./pseudo-reducers/pseudo-reducers.js');

var Tailorbird = () => {};

Tailorbird.Children = {
    mapStyles: (children, style) => {
        return children.map((c, index) => {
            var originalStyle = c.props.style;

            var newStyle = PseudoReducers.reduce((previousStyle, reducer) => {
                var args = {
                    style: previousStyle,
                    children,
                    index,
                    reducers: PseudoReducers,
                };

                if (reducer.hasTag(args) && reducer.shouldApplyStyle(args)) {
                    args = {
                        ...args,
                        style: reducer.applyStyle(args),
                    };
                }
                return reducer.cleanUp(args);
            }, style);

            return React.cloneElement(c, {
                key: c.props.key || index,
                style: {
                    ...originalStyle,
                    ...newStyle,
                },
            });
        });
    },
};

module.exports = Tailorbird;