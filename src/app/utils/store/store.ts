import { BehaviorSubject, map, Observable } from 'rxjs';

export abstract class Store<T> {
  private _store: BehaviorSubject<T>;

  constructor(initalValue: T) {
    this._store = new BehaviorSubject(initalValue);
  }

  selectAll() {
    return this._store as Observable<T>;
  }

  getAll() {
    return this._store.getValue();
  }

  select(key: keyof T) {
    return this._store.pipe(map((store) => store[key]));
  }

  update(key: keyof T, data: Partial<T>) {
    this._store.next({ ...this._store.getValue(), [key]: data });
  }

  set(data: T) {
    this._store.next(data);
  }
}
