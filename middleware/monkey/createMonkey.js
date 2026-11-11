module.exports = (objRep) => {
 const { monkeys } = objRep;
 return (req, res, next) => {
 if (typeof req.body.name == 'undefined' || typeof req.body.sex == 'undefined' || typeof req.body.species == 'undefined') {
 return res.status(400).json({ error: 'Missing name or sex or species' });
 }
//   id: 1,
//         name: 'Joe',
//         sex: 'male',
//         species: 'gibbon'
 const newMonkey = {
 id: objRep.nextId,
 name: req.body.name,
 species: req.body.species
 };
 monkeys.push(newMonkey);
 objRep.nextMonkeyId++;
 res.locals.monkey = newMonkey;
 return next();
 };
};