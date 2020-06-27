

//TODO fetched from a real REST service under http://localhost/customer1/rest/users/authenticate 

import { first, last } from 'rxjs/operators';
import { TestBed } from '@angular/core/testing';

export interface UsersData {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    token: string; //?TBD real-jwt-token;
  }


export class PlantsData{
    public static users: UsersData[] = [
        {
            id:  1,
            username: "user1",
            firstname: "users-first",
            lastname: "users-last",
            token: "TBD"
        },
        {
            id:  2,
            username: "user2",
            firstname: "users2-first",
            lastname: "users2-last",
            token: "TBD2"
        }


    ]
}