import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpService } from '../../services/http-service.service';


@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  selectedFile: File | null = null;

  constructor(
    private readonly httpService: HttpService
  ){}
  
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.httpService.upload(this.selectedFile).subscribe((data: any) => {
        console.log(data.message)
      })
    } else {
      console.error('No file selected');
    }
  }
}
