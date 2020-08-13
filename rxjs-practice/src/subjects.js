import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs'

// document.addEventListener('click', () => {
//     const stream$ = new Subject('First')

//     stream$.subscribe( v => console.log(v))
//     stream$.next('Hello')    
//     stream$.next('Rx') 
// })

// document.addEventListener('click', () => {
//     const stream$ = new BehaviorSubject('First')
    
//     // stream$.subscribe( v => console.log(v))
//     stream$.next('Hello')    
//     stream$.next('Rx') 
//     stream$.subscribe( v => console.log(v))
// })

document.addEventListener('click', () => {
    const stream$ = new ReplaySubject(2)

    // stream$.subscribe( v => console.log(v))
    stream$.next('Hello')    
    stream$.next('Rx') 
    stream$.next('js') 
    stream$.subscribe( v => console.log(v))
})