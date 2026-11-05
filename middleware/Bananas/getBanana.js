module.exports = (objRep) => {
 const { bananas } = objRep;
 return (req, res, next) => {
 const bananasIdAsNumber = parseInt(req.params.id, 10);
 let foundId = -1;
 for (let i = 0; i < books.length; i++) {
 if (bananas[i].id === bananasIdAsNumber) {
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