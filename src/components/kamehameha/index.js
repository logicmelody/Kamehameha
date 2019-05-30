import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Image,
	Text,
} from 'react-native';

import styles from './styles';

class Kamehameha extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>
					This is Kamehameha
				</Text>
			</View>
		);
	}
}

Kamehameha.propTypes = {

};

Kamehameha.defaultProps = {

};

export default Kamehameha;
