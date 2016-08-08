/**
 * Created by wx on 7/21/16.
 */

var bigint = require('big.js');

export function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

export function getRandomRotate() {
	return `${getRandom(0,360)} ${getRandom(0,360)} ${getRandom(0,360)}`;
}

export function getHashPoint (pn, left, right, top, bottom) {
	function getBKDHash(value)
	{
		var seed = 131;
		var hash = bigint(0);
		var len = value.length;
		var i = len - 1;
		while (i >= 0)
		{
			hash = hash.mul(seed).add(value.charCodeAt(i));
			i--;
		}
		return hash.mod(4294967295) / 4294967295;
	} // end getBKDHash

	function getAPHash(value)
	{
		var hash = 0;
		var len = value.length;
		var i = len - 1;
		while (i >= 0)
		{
			if (0 == (i & 1))
			{
				hash ^= (hash << 7) ^ value.charCodeAt(i) ^ (hash >> 3);
			}
			else
			{
				hash ^= (hash << 11) ^ value.charCodeAt(i) ^ (hash >> 5);
			}
			i--;
		}
		return ((hash >>> 0) % 4294967295) / 4294967295;
	} // end getAPHash

	return ({x: left + (right - left) * getBKDHash(pn), y: bottom + (top - bottom) * getAPHash(pn)});
} // end getHashPoint
