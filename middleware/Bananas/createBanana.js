//  id: 1,
//         color: "yellow",
//         sweet: false,
//         monkeyId: null

module.exports = (objRep) => {
 const { bananas } = objRep;
 return (req, res, next) => {
 if (typeof req.body.color == 'undefined' || typeof req.body.sweet == 'undefined' || typeof req.body.monkeyId == 'null') {
 return res.status(400).json({ error: 'Missing color or sweet or monkeyid' });
 }
 const newBanana = {
 id: objRep.nextId,
 color: req.body.color,
 sweet: req.body.sweet,
 monkeyId: req.body.monkeyId
 };
 bananas.push(newBanana);
 objRep.nextBananaId++;
 res.locals.banana = newBanana;
 return next();
 };
};