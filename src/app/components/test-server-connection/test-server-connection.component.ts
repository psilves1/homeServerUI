import { Component } from '@angular/core';
import { HttpService } from '../../services/http-service.service';

@Component({
  selector: 'app-test-server-connection',
  standalone: true,
  imports: [],
  templateUrl: './test-server-connection.component.html',
  styleUrl: './test-server-connection.component.scss'
})
export class TestServerConnectionComponent {

  public serverResponse = '';

  constructor(
    private readonly httpService: HttpService
  ){}

  public onClick(){
    this.httpService.sendGetRequest().subscribe((data: any) => {
      this.serverResponse = data.message;
    })
  }

}
