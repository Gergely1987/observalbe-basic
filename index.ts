import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('alma ' + subscriber);
  subscriber.next('gergely');
  subscriber.next('alma');
  // subscriber.complete();
  setTimeout(() => {
    subscriber.next('késik');
    subscriber.error('hiba');
    subscriber.complete();
  }, 1000);
  return () => {
    console.log('vég');
  };
});

observable$.subscribe({
  next: (value) => console.log('teszt, ', value),
  complete: () => {
    console.log('készen');
  },
  error: (err) => {
    console.log('hiba');
  },
});
