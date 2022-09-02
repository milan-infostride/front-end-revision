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
    // before
        // getElementById
        // render
    // after
        // getrootbyid
        // createRoot
        // root.render 
    // advantage 
        // automated batching
            //before
                //every state update --- rerender
            //now
                //2 state updates are batched --- then re render
//class components
    //life cycle methods
        // https://www.w3schools.com/react/react_lifecycle.asp
        // Mounting
            // 1. constructor(props)
            // 2. getDerivedStateFromProps(props,state)
            // 3. render()
            // 4. componentDidMount()
        // Updating
            // 1. getDerivedStateFromProps(props,state)
            // 2. shouldComponentUpdate()
            // 3. render()
            // 4. getSnapshotBeforeUpdate(prevProp, prevState)
            // 5. componentDidMount()
        // Unmount
            // 1. componentWillUnmunt()
            // useEffect for componentWillUnmount()
                // useEffect(()=>{
                //     // code 
                //     return ()=>{
                //         //clean up code
                //     }
                // },[])
//--hooks(all basic)
    // useState
        // const [stateVar,setStateVar]  = useState(initialState);
    // useEffect
        // useEffect(()=>{
        // componentDidmount 
        // },[])


        // useEffect(()=>{
            // once
        // for any update 
        // })

        // useEffect(()=>{
        // once on render
        // state change 
        // },[state])
        
        // const func = (cb)=>{
        //     //code
        //     cb()
        // }


    // useReducer
        //  let action = {
        //     type: 'plusOne',
        //     payLoad: {
        //         value: 2
        //     }
        // }
        // const reducerFn = (prevState,action)=>{
        //     if(action.type=='plusOne'){
        //         //
        //         // must return new state
        //     }
        //     if(action.type=='lktkltg'){
        //         //
        //     }

        // }
        // const [stateVar,stateVarDipatch] = useReducer(reducerFn,initialState)
        // stateVarDispatch(action)
    // useContext 

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
        //thunk 
            // const sendData= (data)=>{
            //     return async (dispatch)=>{
            //         //await asyncronous code
            //         dispatch(action)
            //     }
            // }
        // app.js
            // dispatch(sendData(data))

// higher-order-components
    //--implement



