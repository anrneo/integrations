import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import moment from 'moment';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    url: string;
    isLoginSubject = this.hasToken();
    
    constructor(
        //private http: HttpClient,
        private router: Router
    ) {
        this.url = environment.apiEndPoint;
    }



    logout() {
        localStorage.removeItem('currentAPP');
        this.router.navigate(['/']);
    }


    getName() {
        if (localStorage &&  localStorage.getItem('DAOcurrentUser')) {
            const token:any = this.getUser();
            return token['username'];
        } else {
            return false;
        }
    }


    getUser() {
        if (localStorage && localStorage.getItem('DAOcurrentUser')) {
            const token = JSON.parse(localStorage.getItem('DAOcurrentUser') ?? '');
            return jwtDecode(token['token']);
        } else {
            return false;
        }
    }

    private hasToken(): boolean {
        return true
    }
}
