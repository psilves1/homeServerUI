import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestServerConnectionComponent } from "./components/test-server-connection/test-server-connection.component";
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet,
      TestServerConnectionComponent,
      FileUploadComponent
    ]
})
export class AppComponent {
  title = 'UI-for-image-website';
}
