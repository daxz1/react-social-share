import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as icons from './icons';

class Icon extends Component {
	static propTypes = {
		type: PropTypes.oneOf(Object.keys(icons)).isRequired
	};

	render() {
		const {type, ...other} = this.props;
		const IconComponent = icons[type];

		return IconComponent ? (
			<IconComponent {...other}/>
		) : null;
	}
}

export * from './icons';
export default Icon;
