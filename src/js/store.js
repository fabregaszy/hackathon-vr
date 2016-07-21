/**
 * Created by wx on 7/21/16.
 */
import justore from 'justore';
var Immutable = justore.Immutable;
var store = new justore({
	cameraPos:Immutable.Map({x:0,y:0,z:0}),
	activeDot:null,
	activePlan:null
},'main store');


store.setCameraPos = function (posObj) {
	var oldPos = store.read('cameraPos');
	store.write('cameraPos',oldPos.merge(posObj));
}

export default store;
