import {of, from, Observable, fromEvent, range, timer, interval} from 'rxjs'
import {map, scan} from 'rxjs/operators'

// const stream$ = of(1, 2, 3, 4)

// stream$.subscribe(val => {
//     console.log(val);
// })

// const arr$ = from([1, 2, 3, 4]).pipe(
//     scan((acc, v) => acc.concat(v), [])
// )

// arr$.subscribe(val => {
//     console.log(val);
// })

// const stream$ = new Observable(observer => {
//     observer.next('First value')

//     setTimeout(() => observer.next('After 1 sec'), 1000)

//     // setTimeout(() => observer.error('Error'), 1000)

//     setTimeout(() => observer.next('After 3 sec'), 3000)
//     setTimeout(() => observer.complete('Complete'), 4000)
// })

// stream$.subscribe(
//     val => console.log(val),
//     err => console.log(err),
//     () => console.log('End')
// )

// stream$.subscribe({
//     next(val) {
//         console.log(val)
//     },
//     error(err) {
//         console.log(err)
//     },
//     complete() {
//         console.log('End')
//     }
// })

// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(e => ({
//             x: e.offsetX,
//             y: e.offsetY,
//             ctx: e.target.getContext('2d')
//         }))
//     )
//     .subscribe(pos => {
//         pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//     })

// const clear$ = fromEvent(document.getElementById('clear'), 'click')

// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas')
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })

// const sub = interval(500).subscribe(v => console.log(v))

// setTimeout(() => sub.unsubscribe(), 4000)

// timer(2500).subscribe(v => console.log(v))

range(42, 10).subscribe(v => console.log(v))