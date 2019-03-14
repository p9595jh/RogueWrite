import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { FuncService } from '../../services/func.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  form: FormGroup;
  loading: Boolean = false;
  imageSrc: Object = '/assets/images/john-resig.jpeg';  // have to set to the 'public' folder

  result: any;

  constructor(
    private funcService: FuncService,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private http: Http
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

    this.httpClient.post(`${this.funcService.ServerAddress}/upload/test`, formData).subscribe(res => {
      this.result = res;
      this.loading = false;
      this.avatar.setValue(null);
    });

    // let headers = new Headers();
    // headers.append('Content-Type', 'multipart/form-data');
    // this.http.post(this.funcService.ServerAddress + '/upload/test', formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe(data => {
    //   this.result = data;
    //   this.loading = false;
    //   this.avatar.setValue(null);
    // });
  }

  get avatar() {
    return this.form.get('avatar');
  }

}
