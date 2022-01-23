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
  body = new FormData();
  inputFormat!: string;
  resizeText!: string;
  limitFormat!: string;
  currentlyDisabled: string;
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
          Validators.minLength(10),
          Validators.maxLength(5000),
        ],
      ],
      inputFormat: [null],
      sentenceLimit: [null, [Validators.required]],
      percentLimit: [null, [Validators.required]],
      url: [null],
      files: [null],
    });

    this.form.valueChanges.subscribe((val) => {
      this.formHasValueChanges = true;
      if (val.percentLimit > 0 && val.percentLimit != null) {
        this.form.controls['sentenceLimit'].disable();
        this.form.controls['percentLimit'].clearValidators();
      } else if (val.sentenceLimit > 0 && val.sentenceLimit != null) {
        this.form.controls['percentLimit'].disable();
        this.form.controls['sentenceLimit'].clearValidators();
      }
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
      if (
        this.form.value.text.includes('http') ||
        this.form.value.text.includes('www')
      ) {
        this.form.value.url = this.form.value.text;
        this.form.value.inputFormat = 'URL';
        delete this.form.value.text;
        if (
          this.form.value.sentenceLimit > 0 ||
          this.form.value.sentenceLimit != null
        ) {
          this.form.value.limitFormat = 'SENTENCE';
        } else {
          this.form.value.limitFormat = 'LIMIT';
        }
      } else if (
        this.form.value.sentenceLimit > 0 ||
        this.form.value.sentenceLimit != null
      ) {
        delete this.form.value.url;
        this.form.value.limitFormat = 'SENTENCE';
        this.form.value.inputFormat = 'TXT';
      } else {
        delete this.form.value.url;
        this.form.value.limitFormat = 'LIMIT';
        this.form.value.inputFormat = 'TXT';
      }

      delete this.form.value.files;
      this.isLoading = true;
      this.coreService.textSummarizeMeaning(this.form.value, (res: any) => {
        this.formHasValueChanges = false;
        this.isLoading = false;
        this.resizeText = res.summary;
      });
    }
  }
  filePost(): void {
    this.isLoading = true;
    console.log(this.file.file);
    this.body.append('file', this.file.file);
    this.coreService.textSummarizeFile(
      this.body,
      this.form.value.percentLimit,
      (res: any) => {
        this.formHasValueChanges = false;
        this.isLoading = false;
        this.resizeText = res.summary;
        this.body.delete('file');
      }
    );
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
    this.form.controls['sentenceLimit'].enable();
    this.form.controls['percentLimit'].enable();
  }
  toText(): void {
    this.text = !this.text;
  }
  sentenceLimit(e): void {
    if (e == null) {
      this.form.controls['percentLimit'].enable();
    }
  }
  percentLimit(e): void {
    if (e == null) {
      this.form.controls['sentenceLimit'].enable();
    }
  }
}
export interface File {
  src: string;
  file?: any;
  name: string;
  type: string;
}
