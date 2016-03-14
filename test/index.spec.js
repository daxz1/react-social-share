import React from 'react';
import test from 'tape';
import sinon from 'sinon';
import * as icons from '../src/icons.js';
import Icon, {Facebook} from '../src/index.js';
import {shallow} from 'enzyme';

test('Icon', t => {
	Object.keys(icons).forEach(k => {
		const wrapper = shallow(<Icon type={k}/>);

		t.is(
			wrapper.find(icons[k]).length,
			1,
			`Must render "${icons[k].name}" icon when "type" prop equals "${k}"`
		);
	});

	const stub = sinon.stub(console, 'error');
	const wrapper = shallow(<Icon type="unknown-icon-123"/>);
	t.is(wrapper.type(), null, 'Must render "null" if "type" property is unknown');
	t.ok(stub.calledOnce, 'Must console.error if there is unknown icon type');
	console.error.restore();

	t.end();
});
