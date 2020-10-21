import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from 'src/app/models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private playersDataSource = new BehaviorSubject<Player[]>(new Array<Player>());
  public playersData = this.playersDataSource.asObservable();

  constructor() { }

  setPlayers(players: Player[]): void {
    this.playersDataSource.next(players);
  }
}
