module.exports = function(db) {
  function login(username, password) {
    const data = await database.query('User',{username: username})
  }
}   