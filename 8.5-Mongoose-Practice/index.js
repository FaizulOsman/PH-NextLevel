// Task 1: Find all users who are located in New York.
db.practiceModuleData.aggregate([{ $match: { "address.city": "New York" } }]);

// Task 2: Find the user(s) with the email "johndoe@example.com" and retrieve their favorite movie.
db.practiceModuleData.aggregate([
  { $match: { email: "johndoe@example.com" } },
  { $project: { "favorites.movie": 1 } },
]);

// Task 3: Find all users with "pizza" as their favorite food and sort them according to age.
db.practiceModuleData.aggregate([
  { $match: { "favorites.food": "pizza" } },
  { $sort: { age: 1 } },
]);

// Task 4: Find all users over 30 whose favorite color is "green".
db.practiceModuleData.aggregate([
  { $match: { age: { $gt: 30 }, "favorites.color": "green" } },
]);

// Task 5: Count the number of users whose favorite movie is "The Shawshank Redemption."
db.practiceModuleData.aggregate([
  { $match: { "favorites.movie": "The Shawshank Redemption" } },
  {
    $group: {
      _id: null,
      count: { $sum: 1 },
    },
  },
]);

// Task 6: Update the zipcode of the user with the email "johndoe@example.com" to "10002".
db.practiceModuleData.updateOne(
  { email: "johndoe@example.com" },
  { $set: { "address.zipcode": "10002" } }
);

// Task 7: Delete the user with the email "alicewilliams@example.com" from the user data.
db.practiceModuleData.deleteOne({ email: "alicewilliams@example.com" });

// Task 8: Group users by their favorite movie and retrieve the average age in each movie group.
db.practiceModuleData.aggregate([
  {
    $group: {
      _id: "$favorites.movie",
      count: { $sum: 1 },
      totalAge: { $avg: "$age" },
    },
  },
]);

// Task 9: Calculate the average age of users with a favorite " pizza " food.
db.practiceModuleData.aggregate([
  { $match: { "favorites.food": "pizza" } },
  {
    $group: {
      _id: null,
      count: { $sum: 1 },
      totalAge: { $avg: "$age" },
    },
  },
]);

// Task 10: Perform a lookup aggregation to retrieve the orders data along with the customer details for each order.
db.practiceOrdersData.aggregate([
  {
    $lookup: {
      from: "practiceCustomersData",
      localField: "customer_id",
      foreignField: "_id",
      as: "updateCustomerDataInOrder",
    },
  },
]);

// Task 11: Group users by their favorite color and retrieve the count of users in each color group.
db.practiceModuleData.aggregate([
  {
    $group: {
      _id: "$favorites.color",
      count: { $sum: 1 },
    },
  },
]);

// Task 12: Find the user(s) with the highest age.
db.practiceModuleData.aggregate([
  {
    $group: {
      _id: null,
      maxAge: { $max: "$age" },
    },
  },
]);

// Task 13: Find the most common favorite food among all users.
db.practiceModuleData.aggregate([
  {
    $group: {
      _id: "$favorites.food",
      count: { $sum: 1 },
    },
  },
  { $sort: { count: -1 } },
  { $limit: 1 },
]);

// Task 14: Calculate the total count of friends across all users.
db.practiceModuleData.aggregate([
  {
    $group: {
      _id: null,
      size: { $sum: { $size: "$friends" } },
    },
  },
]);

// Task 15: Find the user(s) with the longest name.
db.practiceModuleData.aggregate([
  {
    $group: {
      _id: null,
      size: { $max: { $strLenCP: "$name" } },
    },
  },
]);

// Task 16: Calculate each state's total number of users in the address field.
db.practiceModuleData.aggregate([
  {
    $group: {
      _id: null,
      maxAddressLength: { $max: { $size: { $objectToArray: "$address" } } },
    },
  },
]);

// Task 17: Find the user(s) with the highest number of friends.
db.practiceModuleData.aggregate([
  {
    $group: {
      _id: null,
      objectLength: { $max: { $size: "$friends" } },
    },
  },
]);
