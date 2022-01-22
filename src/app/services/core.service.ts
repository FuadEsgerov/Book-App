import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private httpClient: HttpClient) { }

  textSummarize(
    body: any,

    responseCallback: (response: any) => void
  ): void {
    const options = {responseType: 'text' as any };
    this.httpClient.post<any>(
      environment.server.api.getFullUrl('summarize'),
      body,
      options

    ).subscribe(
      (response) => {
        responseCallback(response);
      }
    );
  }
  textSummarizeQuill(
    body: any,

    responseCallback: (response: any) => void
  ): void {
    const options = {responseType: 'text' as any };
    this.httpClient.post<any>(
      environment.server.api.getFullUrl('summarize/quill'),
      body,
      options

    ).subscribe(
      (response) => {
        responseCallback(response);
      }
    );
  }


}
