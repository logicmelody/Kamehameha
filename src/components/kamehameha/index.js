import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Image,
	Text,
} from 'react-native';

import styles from './styles';
import KamehamehaNormal from '../../img/kamehameha-normal.jpg';
import KamehamehaCharging from '../../img/kamehameha-charging.gif';
import KamehamehaFire from '../../img/kamehameha-fire.gif';

class Kamehameha extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					source={KamehamehaFire}
				/>
			</View>
		);
	}
}

Kamehameha.propTypes = {

};

Kamehameha.defaultProps = {

};

export default Kamehameha;
