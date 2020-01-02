import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private url = 'http://localhost:8080';
  private socket;  

  constructor() {
    this.socket = io(this.url);
  }

  emitGame(gameDetails) {
    this.socket.emit('new-game-added', gameDetails);
  }

  getNewGame() {
    return Observable.create((observer) => {
        this.socket.on('new-game-notification', (gameDetails) => {
            observer.next(gameDetails);
        });
    });
  }
}
