import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  apiUrl = 'http://localhost:3000'; // funcService.ServerAddress

  form: FormGroup;
  loading: Boolean = false;
  imageSrc: Object = '/assets/images/john-resig.jpeg';

  result: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      avatar: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onFileChange(files: FileList) {
    if ( files && files.length > 0 ) {
      const file = files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result;
      };

      this.avatar.setValue(file.name);
    }
  }

  onSubmit(files: FileList) {
    const formData = new FormData();
    formData.append('avatar', files[0]);

    this.loading = true;
    console.log(formData.get('avatar'));

    this.http.post(`${this.apiUrl}/upload`, formData).subscribe(res => {
      this.result = res;
      this.loading = false;
      this.avatar.setValue(null);
    });
  }

  get avatar() {
    return this.form.get('avatar');
  }

}
