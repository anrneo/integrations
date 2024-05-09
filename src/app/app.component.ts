import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'integrations';
  storageKey = 'DAOcurrentUser';
  
  ngOnInit(): void  {
    this.saveBackgroundColor();
  }

  saveBackgroundColor(): void {
    localStorage.setItem('DAOcurrentUser',
      '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZpbGxhIFJvamFzLCBDYXJsb3MgUmVuZSAoRXh0ZXJubyAtIEFNQVJJUykiLCJ1c2VyQUQiOiJFSDE3MTciLCJtYWlsIjoiY2FybG9zLnZpbGxhcm9qYXNAZXh0ZXJub3MtY2wuY2VuY29zdWQuY29tIiwiZG4iOiJDTj1FSDE3MTcsT1U9RXh0ZXJub3MsT1U9VXN1YXJpb3MsT1U9Q2hpbGUsREM9Y2VuY29zdWQsREM9Y29ycCIsInBlcm1pc3Npb25zIjp7ImRhbyI6eyJwZXJtaXNzaW9ucyI6WyJDUkVBVEVfSU1QTEVNRU5UQVRJT04iLCJFRElUX0lNUExFTUVOVEFUSU9OIiwiREVMRVRFX0lNUExFTUVOVEFUSU9OIiwiQ1JFQVRFX0lNUExFTUVOVEFUSU9OX1NFUlZFUiIsIkRFTEVURV9JTVBMRU1FTlRBVElPTl9TRVJWRVIiLCJDUkVBVEVfU0VSVkVSIiwiREVMRVRFX1NFUlZFUiIsIkVESVRfU0VSVkVSIiwiQ1JFQVRFX0lORlJBRVNUUlVDVFVSRSIsIkVESVRfSU5GUkFFU1RSVUNUVVJFIiwiTUFJTF9TWU5DUk8iLCJWSUVXX0ZFRURCQUNLIiwiREVMRVRFX0FQUExJQ0FUSU9OX1NFUlZFUiIsIkNSRUFURV9BUFBMSUNBVElPTl9TRVJWRVIiXSwicHJvZmlsZSI6IkRldmVsb3BlciBEQU8ifSwicmVkZXMiOnsicGVybWlzc2lvbnMiOltdLCJjb3VudHJ5IjpudWxsfSwiYWJtIjp7InBlcm1pc3Npb25zIjpbXX19LCJpYXQiOjE3MTUxMzg3ODIsImV4cCI6MTcxNTE3NDc4Mn0.02xsI0y13g7yEjOhFhuUFSiU46W2qOG4WxiCbOA3jw8"}'
    );
  }

}
