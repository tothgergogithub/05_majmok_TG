//   id: 1,
//         name: 'Joe',
//         sex: 'male',
//         species: 'gibbon'
module.exports = (objRep) => {
 const { monkeys } = objRep;
 return (req, res, next) => {
 if (typeof req.body.name !== 'undefined') {
 monkeys[res.locals.monkeysId].title = req.body.name;
 }
 if (typeof req.body.sex !== 'undefined') {
 monkeys[res.locals.monkeysId].author = req.body.author;
 }
 if ((typeof req.body.name === 'undefined') && (typeof req.body.sex === 'undefined') && (typeof req.body.species === 'undefined')) {
 return res.status(400).json({ error: 'Missing title or author' });
 }
 return res.status(201).json(books[res.locals.bookId]);
 };
};