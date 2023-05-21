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

// Delete the user with the email "alicewilliams@example.com" from the user data.
db.practiceModuleData.deleteOne({ email: "alicewilliams@example.com" });
