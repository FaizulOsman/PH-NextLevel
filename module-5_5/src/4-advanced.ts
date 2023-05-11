// // Properties
// interface Model<TData, TMethods> {
//   data: TData;
//   methods: TMethods;
// }

// interface IUser {
//   firstName: string;
//   lastName: string;
// }

// // Methods
// interface IMethods {
//   fullName(): string;
// }

// // Combine Properties & Methods in a type (Properties + Methods => Type)
// type model = Model<IUser, IMethods>;

// // It will use Type (Type => Properties + Methods)
// class User implements model {
//   data: IUser;
//   methods: IMethods;

//   constructor(firstName: string, lastName: string) {
//     this.data = { firstName, lastName };
//     this.methods = {
//       fullName: () => `${firstName} ${lastName}`,
//     };
//   }
// }
// const user1 = new User("Abul", "Mia");
// console.log(user1.methods.fullName());
