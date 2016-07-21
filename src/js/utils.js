/**
 * Created by wx on 7/21/16.
 */


export function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

export function getRandomRotate() {
	return `${getRandom(0,360)} ${getRandom(0,360)} ${getRandom(0,360)}`;
}
