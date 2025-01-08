import {createStore} from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy:false
}

const counterReducer = (store = INITIAL_VALUE,action)=>{
  // console.log("action recevied",action)
  if(action.type === "INCREMENT"){
    return {...store, counter: store.counter + 1}
  }
  else if(action.type === "DECREMENT"){
    return {...store,counter: store.counter - 1}
  }
  else if(action.type == "ADD"){
    return {...store, counter:store.counter + Number(action.payload)}
  }
  else if(action.type == "SUB"){
    return {...store, counter:store.counter - Number(action.payload)}
  }
  else if(action.type == "TOGGLE"){
    return {...store, privacy: !store.privacy}
  }
  return store
}

const counterStore = createStore(counterReducer)

export default counterStore;