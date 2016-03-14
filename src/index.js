/* eslint no-use-before-define: [0] */
import React, {PropTypes, Component} from 'react';
import {
	Dribbble,
	Facebook,
	Google,
	Instagram,
	Odnoklassniki,
	Periscope,
	Telegram,
	Twitter,
	Vkontakte,
	Youtube
} from './icons';

class Icon extends Component {
	static propTypes = {
		type: PropTypes.oneOf([
			'facebook',
			'vkontakte',
			'twitter',
			'dribbble',
			'google',
			'instagram',
			'odnoklassniki',
			'periscope',
			'telegram',
			'youtube'
		]).isRequired
	};

	render() {
		const {type, ...other} = this.props;

		switch (type) {
			case 'facebook':
				return <Facebook {...other}/>;

			case 'vkontakte':
				return <Vkontakte {...other}/>;

			case 'twitter':
				return <Twitter {...other}/>;

			case 'dribbble':
				return <Dribbble {...other}/>;

			case 'google':
				return <Google {...other}/>;

			case 'instagram':
				return <Instagram {...other}/>;

			case 'odnoklassniki':
				return <Odnoklassniki {...other}/>;

			case 'periscope':
				return <Periscope {...other}/>;

			case 'telegram':
				return <Telegram {...other}/>;

			case 'youtube':
				return <Youtube {...other}/>;

			default:
				return null;
		}
	}
}

export default Icon;
