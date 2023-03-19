import React from 'react';
// import renderer from 'react-test-renderer';
const renderer = require('react-test-renderer');
import Header from '../src/components/Header/Header';

test('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});
