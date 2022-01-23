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
  textSummarizeFile(
    body: any,
    size:any,

    responseCallback: (response: any) => void
  ): void {
    this.httpClient.post<any>(
      environment.server.api.getFullUrl(`summarize/external/file?limit=LIMIT&size=${size}`),
      body

    ).subscribe(
      (response) => {
        responseCallback(response);
      }
    );
  }
  textSummarizeMeaning(
    body: any,
    responseCallback: (response: any) => void
  ): void {

    this.httpClient.post<any>(
      environment.server.api.getFullUrl('summarize/external'),
      body

    ).subscribe(
      (response) => {
        responseCallback(response);
      }
    );
  }
  charCount(
    body: any,

    responseCallback: (response: any) => void
  ): void {
    const options = {responseType: 'text' as any };
    this.httpClient.post<any>(
      environment.server.api.getFullUrl('summarize/char-count'),
      body,
      options

    ).subscribe(
      (response) => {
        responseCallback(response);
      }
    );
  }


}
