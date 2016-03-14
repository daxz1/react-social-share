import React from 'react';
import test from 'tape';
import sinon from 'sinon';
import Icon from '../src/index.js';
import {shallow} from 'enzyme';

const tests = {
	facebook: 'Facebook',
	vkontakte: 'Vkontakte',
	twitter: 'Twitter',
	dribbble: 'Dribbble',
	google: 'Google',
	instagram: 'Instagram',
	odnoklassniki: 'Odnoklassniki',
	periscope: 'Periscope',
	telegram: 'Telegram',
	youtube: 'Youtube'
};

test('Icon', t => {
	Object.keys(tests).forEach(k => {
		const wrapper = shallow(<Icon type={k}/>);

		t.is(
			wrapper.find(tests[k]).length,
			1,
			`Must render "${tests[k]}" icon when "type" prop equals "${k}"`
		);
	});

	const stub = sinon.stub(console, 'error');
	const wrapper = shallow(<Icon type="unknown-icon-123"/>);
	t.is(wrapper.type(), null, 'Must render "null" if "type" property is unknown');
	t.ok(stub.calledOnce, 'Must console.error if there is unknown icon type');
	console.error.restore();

	t.end();
});
