import { User } from "../../models/user.model";
import { Observable, of } from "rxjs";
import { UserMock } from "../mocks/user.mock";


export class UserServiceStub {

    userMock = new UserMock();

    getUsers(): Observable<User[]>{
        return of(this.userMock.users);
    }
}