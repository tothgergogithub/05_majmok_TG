module.exports = (objRep) => {
 const { monkeys } = objRep;
 return (req, res, next) => {
 console.table(monkeys);
 return res.status(200).json(monkeys);
 };
};