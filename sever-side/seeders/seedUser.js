const { User, Balance } = require("../models");
User.create({
  username: "Test 1",
  email: "test@gmail.com",
  password: "test",
})
  .then((data) => {
    return Balance.create({
      account_id: 1,
      amount: 0,
    });
  })
  .then((data) => {
    return User.create({
      username: "Test 2",
      email: "test2@gmail.com",
      password: "test",
    });
  })
  .then((data) => {
    return Balance.create({
      account_id: 2,
      amount: 0,
    });
  })
  .then((err) => {
    console.log("Success Seed!");
  });
