import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Image,
	Button,
} from 'react-native';
import { connect } from 'react-redux';

import {
	stopKamehamehaAction,
	chargeKamehamehaAction,
} from '../../actions/kamehameha-actions';

import {
	KamehamehaStatusEnum,
} from '../../utils/utils';

import styles from './styles';
import KamehamehaNormal from '../../img/kamehameha-normal.jpg';
import KamehamehaCharge from '../../img/kamehameha-charge.gif';
import KamehamehaFire from '../../img/kamehameha-fire.gif';

class Kamehameha extends Component {
	_renderActionButtons = () => {
		const {
			kamehamehaStatus,
			stopKamehamehaAction,
			chargeKamehamehaAction,
		} = this.props;

		switch (kamehamehaStatus) {
			case KamehamehaStatusEnum.NORMAL:
				return (
					<Button
						title='かめはめ波'
						onPress={chargeKamehamehaAction}
					/>
				);

			case KamehamehaStatusEnum.CHARGE:
			case KamehamehaStatusEnum.FIRE:
				return (
					<Button
						title='停止發射'
						onPress={stopKamehamehaAction}
					/>
				);

			default:
				return (
					<Button
						title='かめはめ波'
						onPress={chargeKamehamehaAction}
					/>
				);
		}
	}

	render() {
		const {
			kamehamehaStatus,
		} = this.props;

		const {
			_renderActionButtons,
		} = this;

		return (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={getImage(kamehamehaStatus)}
				/>

				{_renderActionButtons()}
			</View>
		);
	}
}

Kamehameha.propTypes = {

};

Kamehameha.defaultProps = {

};

const getImage = (status) => {
	switch (status) {
		case KamehamehaStatusEnum.NORMAL:
			return KamehamehaNormal;

		case KamehamehaStatusEnum.CHARGE:
			return KamehamehaCharge;

		case KamehamehaStatusEnum.FIRE:
			return KamehamehaFire;

		default:
			return KamehamehaNormal;
	}
};

const mapStateToProps = (state) => {
	const {
		kamehamehaStatus,
	} = state;

	return {
		kamehamehaStatus,
	};
};

const mapDispatchToProps = {
	stopKamehamehaAction,
	chargeKamehamehaAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kamehameha);
