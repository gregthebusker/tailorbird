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
        var div2 = ReactDOM.findDOMNode(components[1]);
        expect(div.style.backgroundColor).toEqual('green');
        expect(div2.style.backgroundColor).toNotEqual('green');

    });

    it('Renders last child correctly', () => {
        var components = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'test-list-item');
        var div = ReactDOM.findDOMNode(components[components.length - 1]);
        var div2 = ReactDOM.findDOMNode(components[components.length - 2]);
        expect(div.style.backgroundColor).toEqual('red');
        expect(div2.style.backgroundColor).toNotEqual('red');
    });
});
