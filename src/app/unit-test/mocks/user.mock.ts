import { User } from "src/app/models/user.model";

export class UserMock {
    users: User [] = [
    {
      id: 1,
      firstName: 'Alex',
      age: 25,
      photo: 'assets/image1.jpg'
    },
    {
      id: 2,
      firstName: 'Anna',
      age: 20,
      photo: 'assets/image2.jpg'
    },
    {
      id: 3,
      firstName: 'Jim',
      age: 30,
      photo: 'assets/image3.jpg'
    }
  ]
}