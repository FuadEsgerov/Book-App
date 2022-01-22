import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-summarize',
  templateUrl: './summarize.component.html',
  styleUrls: ['./summarize.component.css'],
})
export class SummarizeComponent implements OnInit {
  form!: FormGroup;
  formHasValueChanges = false;
  text = true;
  resizeText!: string;
  file: File;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private coreService: CoreService
  ) {
    this.form = this.formBuilder.group({
      text: [
        null,
        [
          Validators.required,
          Validators.minLength(300),
          Validators.maxLength(5000),
        ],
      ],
      files: [null],
    });

    this.form.valueChanges.subscribe((val) => {
      this.formHasValueChanges = true;
    });
  }

  submit(event: any): void {
    event.stopPropagation();
    if (this.form.valid) {
      this.post();
    }
  }
  ngOnInit(): void {}
  post(): void {
    if (this.form.valid) {
      // request
      this.isLoading = true;
      this.coreService.textSummarizeQuill(this.form.value.text, (res: any) => {
        this.formHasValueChanges = false;
        this.isLoading = false;
        this.resizeText = res;
      });
    }
  }
  filePost(): void {
    this.isLoading = true;
    this.coreService.textSummarizeQuill(this.form.value.text, (res: any) => {
      this.formHasValueChanges = false;
      this.isLoading = false;
      this.resizeText = res;
    });
  }
  handleFileInput(event: any): void {
    if (event.target.files) {
      Array.from(event.target.files).forEach((f: any) => {
        const file: File = {
          src: URL.createObjectURL(f),
          file: f,
          name: f.name,
          type: f.name.split('.').pop(),
        };
        this.file = file;
      });
    }
  }
  clearText(): void {
    // Clear Text
    this.form.get('text').setValue(null);
  }
  toText(): void {
    this.text = !this.text;
  }
  toFile(): void {
    this.text = !this.text;
  }
}
export interface File {
  src: string;
  file?: any;
  name: string;
  type: string;
}
