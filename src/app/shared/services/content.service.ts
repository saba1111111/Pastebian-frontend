import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContent, ICreateContentInput } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private serverUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public createContent(input: ICreateContentInput): Observable<IContent> {
    return this.http.post<IContent>(`${this.serverUrl}/content`, input);
  }

  public findContent(id: string): Observable<IContent> {
    return this.http.get<IContent>(`${this.serverUrl}/content/${id}`);
  }
}
