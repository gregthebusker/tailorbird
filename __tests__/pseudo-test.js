describe('Pseudo App Tests', () => {
    var App = require('../src/PseudoTestApp.js');
    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');

    var dom = TestUtils.renderIntoDocument(
      <App />
    );

    it('Renders first child correctly', () => {
        var components = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'test-list-item');
        var div = ReactDOM.findDOMNode(components[0]);
        expect(div.style.backgroundColor).toEqual('green');

    });

    it('Renders last child correctly', () => {
        var components = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'test-list-item');
        var div = ReactDOM.findDOMNode(components[components.length - 1]);
        expect(div.style.backgroundColor).toEqual('red');

    });
});
