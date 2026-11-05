module.exports = (objRep) => {
 const { monkeys } = objRep;
 return (req, res, next) => {
 const monkeyIdAsNumber = parseInt(req.params.id, 10);
 let foundId = -1;
 for (let i = 0; i < books.length; i++) {
 if (monkeys[i].id === monkeyIdAsNumber) {
 foundId = i;
 break;
 }
 }
 if (foundId === -1) {
 return res.status(404).json({ error: `Book not found with id: ${req.params.id}` });
 }
 res.locals.bookId = foundId;
 return next();
 };
};
