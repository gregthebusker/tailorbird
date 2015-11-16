var React = require('react');
var PseudoReducers = require('./pseudo-reducers/pseudo-reducers.js');

var Tailorbird = () => {};

Tailorbird.Children = {
    mapStyles: (children, style) => {
        return children.map((c, index) => {
            var originalStyle = c.props.style;
            var newStyle = {};

            for (var key in style) {
                if (key.indexOf(':') == 0) {
                    var tokenized = key.split(':');
                    tokenized.shift();
                    if (tokenized.every(token => {
                        return PseudoReducers.some(r => r(`:${token}`, {
                            children,
                            index,
                        }));
                    })) {
                        newStyle = {
                            ...newStyle,
                            ...style[key],
                        };
                        delete style[key];
                    }
                }
            }

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