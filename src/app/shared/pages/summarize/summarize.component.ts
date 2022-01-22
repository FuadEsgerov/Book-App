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
  resizeText!: string;
  constructor(
    private formBuilder: FormBuilder,
    private coreService: CoreService
  ) {
    this.form = this.formBuilder.group({
      text: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(2000),
        ],
      ],
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
        // request
    this.coreService.textSummarizeQuill(this.form.value.text, (res: any) => {
    this.formHasValueChanges = false;
    this.resizeText = res;
    });
  }
}
