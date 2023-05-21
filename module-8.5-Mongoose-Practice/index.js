// Find all users who are located in New York.
db.practiceModuleData.aggregate([{ $match: { "address.city": "New York" } }]);

// Find the user(s) with the email "johndoe@example.com" and retrieve their favorite movie.
db.practiceModuleData.aggregate([
  { $match: { email: "johndoe@example.com" } },
  { $project: { "favorites.movie": 1 } },
]);
