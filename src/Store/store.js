import react from 'react';
import { legacy_createStore } from 'redux';

const init_State = {
    items: [],
    total:0
}
const reducer=(state = init_State , action)=>{
    switch (action.type){
        case 'add':
            let av = false;
            state.items.forEach(ee=>ee===action.payload.e&&(av=true))
            if(!av){
                return {...state,items:[...state.items,action.payload.e]}
            }else return state
            
        case 'delete':
            return {...state,items:state.items.filter(ee=>ee!==action.payload.e)}
            
        case 'increment':
            if(action.payload.e.qt<10){
                let T = state.items
                const obj = action.payload.e
                const index = state.items.findIndex(ee=>ee===obj)
                obj.qt=obj.qt+1
                obj.total=obj.price*obj.qt
                T.splice(index,1,obj)
                return {...state,items:[...T]}
            }else return state

        case 'decrement':
            if(action.payload.e.qt>1){
                let T = state.items
                const obj = action.payload.e
                const index = state.items.findIndex(ee=>ee===obj)
                obj.qt=obj.qt-1
                obj.total=obj.price*obj.qt
                T.splice(index,1,obj)
                return {...state,items:[...T]}
            }else return state
        
        case 'total':
            const sum = state.items.reduce((total,e)=>total+e.total,0)
            return {...state,total:sum}
        
        default :
            return state
    }
}

const store = legacy_createStore(reducer)
export default store;