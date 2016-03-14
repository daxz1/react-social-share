import React from 'react';
import test from 'tape';
import * as icons from '../src/icons.js';
import {shallow} from 'enzyme';

const viewBoxRegExp = /^([0-9]+\s){3}[0-9]+$/;

Object.keys(icons).forEach(k => test(`Icons/${k}`, t => {
	const Component = icons[k];

	const wrapper = shallow(
		<Component
			viewBox="100 100 100 test"
			className="custom-class"
			>
			<span/>
			<div/>
		</Component>
	);

	t.ok(wrapper.is('svg'), 'Must render "svg" element as root');

	t.is(
		wrapper.find('svg').props().className,
		'custom-class',
		'Must render custom "className" property'
	);

	t.is(wrapper.children().length, 1, 'Must ignore "children" prop');

	t.not(
		wrapper.find('svg').props().viewBox,
		'100 100 100 test',
		'Must ignore "viewBox" property'
	);

	t.ok(
		viewBoxRegExp.test(wrapper.find('svg').props().viewBox),
		'Must render valid "viewBox" property'
	);

	t.is(wrapper.find('path').length, 1, 'Must render only one "path" element');

	t.end();
}));
