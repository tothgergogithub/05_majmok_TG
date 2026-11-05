module.exports = (objRep) => {
 const { bananas } = objRep;
 return (req, res, next) => {
 const deletedBanana = bananas[res.locals.bananaIndex];
 bananas.splice(res.locals.bananaIndex, 1);
 return res.status(200).json({ deletedBanana });
 };
};
