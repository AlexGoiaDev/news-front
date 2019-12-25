import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newsForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      date: new FormControl(null, [Validators.required]),
      content: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      author: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    });
  }

  ngOnInit() {
  }

  addNews() {

  }

}
