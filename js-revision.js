// call bind apply
// let obj1 = {
//     name: 'milan',
//     displayName(...arr){
//         console.log(this.name+' '+arr[0]+' '+ arr[1]);
//     }
// }
// let obj2 = {
//     name: 'Test',
// }
// let myBindFunc  = obj1.displayName.bind(obj2,'text1','text2');
// myBindFunc();

//promise
// var data = {
//     response: 500,
//     body: JSON.stringify({a:2})
// } 
// let resolveCb = (jsonData)=>{
//     return JSON.parse(jsonData);
// }
// let myPromise = new Promise((resolveCb,rejectCb)=>{
//     // console.log('data = ',data);
//     if(data.response==200)
//         resolveCb(data.body)
//     rejectCb("error....");
// })

// myPromise.then(result=>{
//     console.log('data----',result)
// })
// .catch(err=>{
//     console.log('error----',err)
// })




//flattening arrays

//let arr = [1,2,3,[4,5],[6,7],8];
// console.log([].concat.apply([],arr))
// console.log([].concat(...arr));
// console.log(arr.reduce((acc,curvalue)=>{
//     return acc.concat(curvalue)
// },[]))
//let arr2 = arr.flat()
//closures
    
//currying function

//higher order function

//memoization

// const memo = (cb)=>{
//     let memoObj = {}; //privitization
//     return (...args)=>{
//         let argsStr = args.toString();
//         if(memoObj[argsStr])
//             return memoObj[argsStr];
//         memoObj[argsStr] = cb(...args);
//         return memoObj[argsStr];
//     }
// }
// const fact = (num)=>{
//     if(num==0)
//         return 1;
//     return num * fact(num-1);
// }
// console.log(fact(5))

// console.log(memo(fact)(5))

// const func = function(){
//     return ()=>{
//         console.log(this.name)
//     }
// }

// let obj = {
//     name: 'milan'
// }

// func.call(obj)()


//event loop


// setTimeout(()=>{
//     console.log('setTimeout') 
//  },0)
 
//  let myPromise = new Promise(resolveCb=>{
//      resolveCb('resolve cb')
//  })
 
//  myPromise.then(res=>{
//      console.log(res)
//  })

//shallow copy deep copy


// let obj = {
//     a: 5,
//     b: 6,
//     c: {
//         c1: 7,
//         c2: 8
//     }
// }

// // let obj2 = {...obj};
// let obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj2);

// obj2.c.c1 = 'edited';
// obj2.a = 'edited';
// console.log('obj consoled',obj)

//iterator generators

//flexbox

//insta revise

//react---
//react v17 vs vs 18
//class components
    //life cycle methods
//--hooks(all basic)
    //useMemo--implementation
    //useCallback--implementation
    //useEffect -- component did mount
//--router --hooks
    //useHistory
    //to get params useParams
    //useLocation
    //to get query params
    //router v5 vs v6
//--redux
    //how basic redux work
    //evrything revise
    //middleware and thunk

// higher-order-components
    //--implement



