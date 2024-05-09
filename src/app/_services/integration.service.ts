import {Injectable, inject} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {throwError} from 'rxjs';
import { queryGraphqlGeneralInfo } from '../utils';

@Injectable({
    providedIn: 'root'
})
export class IntegrationService {
  
  url: string = environment.MAINTENANCE_URL;
  apiKey: string = environment.MAINTENANCE_TOKEN;
  private http = inject(HttpClient)
    


  private getHeaders() {
      return new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${this.apiKey}`)
          .set('rejectUnauthorized', `false`)
      
  }

    async graphqlConnector(query: string): Promise<any> {
        try {
          
          return this.http.post(
            this.url,
                  {
                      query
                  },
                  {
                      headers: this.getHeaders()
                  },
                  
          ).subscribe(data=>{
            console.log(data);
            
            return data
          })
        } catch (error) {
          console.error(error);
          
          
        }
  }

  getGeneralInfo() {
    return this.graphqlConnector(queryGraphqlGeneralInfo(''));
  }


}

