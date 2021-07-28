module.exports = (req, res, next) => {
    if (req.session.user.role !== 'admin') {
      return res.status(401).end()
    }
  
    next()
}
  