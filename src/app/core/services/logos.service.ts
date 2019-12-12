import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LogoModel} from '../models/logo-model';

@Injectable({
  providedIn: 'root'
})
export class LogosService {
  private BASE_URL = '/api/logos';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getLogos(): Observable<LogoModel[]> {
    return this.http.get<LogoModel[]>(this.BASE_URL);
  }

  getLogo(id: number): Observable<LogoModel> {
    return this.http.get<LogoModel>(`${this.BASE_URL}/${id}`);
  }

  addLogo(logo: LogoModel): Observable<LogoModel> {
    return this.http.post<LogoModel>(this.BASE_URL, logo, this.httpOptions);
  }

  updateLogo(logo: LogoModel): Observable<LogoModel> {
    return this.http.put<LogoModel>(`${this.BASE_URL}/${logo.id}`, logo, this.httpOptions);
  }

  removeLogo(id: number): Observable<LogoModel> {
    return this.http.delete<LogoModel>(`${this.BASE_URL}/${id}`);
  }
}
