import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { UserMock } from '../unit-test/mocks/user.mock';

describe('UserService', () => {
    let service: UserService;
    let httpTestingController: HttpTestingController;

    let userMock = new UserMock();
    let url = 'http://localhost:3000';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ]
        });
        service = TestBed.inject(UserService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getUsers', () => {
        const data = userMock.users;

        service.getUsers().subscribe((response) => {
            expect(response).toEqual(data);
        });

        const req = httpTestingController.expectOne({
            method: 'GET',
            url: `${url}/users`,
        });

        req.flush(data);
    });

});
