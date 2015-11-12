describe('Pseudo App Tests', () => {
    it('Renders first child correctly', () => {
        var App = require('../src/PseudoTestApp.js');
        var React = require('react');
        var ReactDOM = require('react-dom');
        var TestUtils = require('react-addons-test-utils');

        var dom = TestUtils.renderIntoDocument(
          <App />
        );

        TestUtils.findRenderedDOMComponentWithClass(dom, 'test-list-item');
        var div = ReactDOM.findDOMNode(component);
        expect(div.style.backgroundColor).toEqual('green');

    });
});
