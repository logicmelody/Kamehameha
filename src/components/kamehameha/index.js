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
	stopVegetaAttackAction,
} from '../../actions/vegeta-actions';

import {
	KamehamehaStatusEnum,
} from '../../utils/utils';

import styles from './styles';
import KamehamehaNormal from '../../img/kamehameha-normal.jpg';
import KamehamehaCharge from '../../img/kamehameha-charge.gif';
import KamehamehaFire from '../../img/kamehameha-fire.gif';
import VegetaAttack from '../../img/vegeta-attack.gif'

class Kamehameha extends Component {
	_renderActionButtons = () => {
		const {
			kamehamehaStatus,
			stopKamehamehaAction,
			chargeKamehamehaAction,
			stopVegetaAttackAction,
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
				return (
					<Button
						title='停止集氣'
						onPress={stopKamehamehaAction}
					/>
				);

			case KamehamehaStatusEnum.FIRE:
				return (
					<Button
						title='停止攻擊'
						onPress={() => {
							stopKamehamehaAction();
							stopVegetaAttackAction();
						}}
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

	_renderVegetaAttack = () => {
		const {
			isVegetaAttackStatus,
		} = this.props;

		if (isVegetaAttackStatus) {
			return (
				<Image
					style={styles.vegetaImage}
					source={VegetaAttack}
					resizeMode='contain'
				/>
			);
		}
	}

	render() {
		const {
			kamehamehaStatus,
		} = this.props;

		const {
			_renderVegetaAttack,
			_renderActionButtons,
		} = this;

		return (
			<View style={styles.container}>
				<Image
					style={styles.kamehamehaImage}
					source={getImage(kamehamehaStatus)}
				/>

				{_renderVegetaAttack()}

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
		isVegetaAttackStatus,
	} = state;

	return {
		kamehamehaStatus,
		isVegetaAttackStatus,
	};
};

const mapDispatchToProps = {
	chargeKamehamehaAction,
	stopKamehamehaAction,
	stopVegetaAttackAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kamehameha);
