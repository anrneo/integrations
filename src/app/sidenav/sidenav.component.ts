import { Component, inject  } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router, RouterModule } from '@angular/router';
import { PermissionsService } from '../_services/permissions.service';
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, MatTooltipModule, MatMenuModule,MatButtonModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
    authenticationService: AuthenticationService = inject(AuthenticationService)
    permissionsService: PermissionsService = inject(PermissionsService)
    public displayName: string | undefined;


    //Permisos
    private permissions = [''];
    public hasPermission: boolean = false;
    private subscription: any;

    constructor(
        
        public router: Router,
        
    ) {
    }

    ngOnInit() {
      this.displayName = this.getNameInitials(this.authenticationService.getName());

      this.permissionsService.showpermissionService();

      this.subscription = this.permissionsService.permissionStatus.subscribe((res:any) => {
          this.permissions = res;
      });
      this.permissionsService.showpermissionService();
      this.hasPermission = this.permissions.indexOf('VIEW_FEEDBACK') > -1;
  }



  logOut() {
      this.authenticationService.logout();
  }

  getNameInitials(userName: any) {
      if (userName) {
          let initials = (userName.replace(/\s/g, '')).split(',');
          initials = initials[1].charAt(0) + initials[0].charAt(0);
          return initials;
      }
  }
  

}
