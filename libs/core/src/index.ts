import _ from 'lodash';

export function randomHello() {
	return _.sample(['Hello', 'Ciao', 'Bonjour', 'Hallo']);
}
