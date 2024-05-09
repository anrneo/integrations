import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private permission = new BehaviorSubject(null);
  permissionStatus = this.permission.asObservable();

  constructor() { }

  showpermissionService() {
    const token = JSON.parse(localStorage.getItem('DAOcurrentUser') ?? '');
    const permissions:any = jwtDecode(token['token']);
    this.permission.next(permissions['permissions']['dao']['permissions']);
  }
}
