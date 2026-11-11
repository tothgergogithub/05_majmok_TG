const getMonkeysMW = require('../middleware/monkey/getMonkeys');
const getMonkeyIndexMW = require('../middleware/monkey/getMonkeyIndex');
const createMonkeyMW = require('../middleware/monkey/createMonkey');
const updateMonkeyMW = require('../middleware/monkey/updateMonkey');
const deleteMonkeyMW = require('../middleware/monkey/deleteMonkey');
const deleteMonkeyBananasMW = require('../middleware/monkey/deleteMonkeyBananas');
const getBananasMW = require('../middleware/banana/getBananas');
const getBananaIndexMW = require('../middleware/banana/getBananaIndex');
const createBananaMW = require('../middleware/banana/createBanana');
const updateBananaMW = require('../middleware/banana/updateBanana');
const deleteBananaMW = require('../middleware/banana/deleteBanana');
const checkMonkeyIdMW = require('../middleware/banana/checkMonkeyId');
function addRoutes(app) {
 const monkeys = [
 { id: 1, name: 'Joe', sex: 'male', species: 'gibbon' },
 { id: 2, name: 'Josephine', sex: 'female', species: 'gorilla' },
 { id: 3, name: 'Lajos', sex: 'male', species: 'orangutan' }
 ];
 const bananas = [
 { id: 1, color: 'yellow', sweet: false, monkeyId: null },
 { id: 2, color: 'yellow', sweet: true, monkeyId: null },
 { id: 3, color: 'green', sweet: true, monkeyId: null },
 { id: 4, color: 'green', sweet: false, monkeyId: null }
 ];
 const objRep = {
 monkeys,
 bananas,
 nextMonkeyId: monkeys.length + 1,
 nextBananaId: bananas.length + 1
 };
 app.get('/monkey',
 getMonkeysMW(objRep));
 app.post('/monkey',
 createMonkeyMW(objRep));
 app.get('/monkey/:id',
 
 (req, res, next) => res.status(200).json(monkeys[res.locals.monkeyIndex]));
 app.patch('/monkey/:id',
 getMonkeyIndexMW(objRep),
 updateMonkeyMW(objRep));
 app.delete('/monkey/:id',
 getMonkey(objRep),
 deleteMonkeyBananasMW(objRep),
 deleteMonkeyMW(objRep));
 app.get('/banana',
 getBananasMW(objRep));
 app.post('/banana',
 checkMonkeyIdMW(objRep),
 createBananaMW(objRep));
 app.get('/banana/:id',
 
 (req, res, next) => res.status(200).json(bananas[res.locals.bananaIndex]));
 app.patch('/banana/:id',
 getBananaIndexMW(objRep),
 checkMonkeyIdMW(objRep),
 updateBananaMW(objRep));
 app.delete('/banana/:id',
 getBananaIndexMW(objRep),
 deleteBananaMW(objRep));
}
module.exports = addRoutes;