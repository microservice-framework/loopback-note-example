module.exports = function(app) {
  var User = app.models.User;
  User.create({username: 'admin', email: 'foo@bar.com', password: 'test'}, function(err, userInstance) {
    console.log(userInstance);
    User.login({username: 'admin', password: 'test'}, function(err, answer) {
      console.log(answer);
    })
  });
}
