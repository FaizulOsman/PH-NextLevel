// Find all users who are located in New York.
db.practiceModuleData.aggregate([{ $match: { "address.city": "New York" } }]);
