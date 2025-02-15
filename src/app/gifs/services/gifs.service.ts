import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const GIPHY = 'tb4LuCthQovOpeEixIRXQlQePahCOVHf';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'tb4LuCthQovOpeEixIRXQlQePahCOVHf';

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  public async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get(`${this.serviceUrl}/search`, { params }).subscribe((resp) => {
      console.log(resp);
    });
  }
}
