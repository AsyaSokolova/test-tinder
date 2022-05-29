import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    URL = 'http://localhost:3000';

    constructor(
        private httpClient: HttpClient
    ){}

    getUsers(): Observable<User[]>{
        return this.httpClient.get<User[]>(`${this.URL}/users`);
    }
}