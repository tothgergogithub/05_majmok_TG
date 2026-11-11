module.exports = (objRep) => {
 const { bananas } = objRep;
 return (req, res, next) => {
 if (typeof req.body.color === 'undefined' &&
 typeof req.body.sweet === 'undefined' &&
 typeof req.body.monkeyId === 'undefined') {
 return res.status(400).json({ error: 'Missing color, sweet or monkeyId' });
 }
 const banana = bananas[res.locals.bananaIndex];
 if (typeof req.body.color !== 'undefined') {
 banana.color = req.body.color;
 }
 if (typeof req.body.sweet !== 'undefined') {
 banana.sweet = req.body.sweet;
 }
 if (typeof req.body.monkeyId !== 'undefined') {
 banana.monkeyId = req.body.monkeyId;
 }
 return res.status(200).json(banana);
 };
};