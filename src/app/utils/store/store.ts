import { BehaviorSubject, map, Observable } from 'rxjs';

export abstract class Store<T> {

  private _store: BehaviorSubject<T>

  constructor(initalValue: T) {
    this._store = new BehaviorSubject(initalValue)
  }

  protected selectAll() {
    return this._store as Observable<T>
  }

  protected select(key: keyof T ) {
    return this._store.pipe(map(item => item[key]))
  }

  protected update(key: keyof T, data: Partial<T>) {
    this._store.next({...this._store.getValue(), [key]: data})
  }
}
