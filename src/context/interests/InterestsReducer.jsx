const InterestsReducer = (state, {type,payload}) => {
    switch (type){
        case "ADD_TO_INTERESTS":{
            const updateInterestList = [...state.interestList];
            const index=updateInterestList.findIndex((item)=>item.id===payload.id);
            if(index<0) {
                updateInterestList.push({...payload});
            }
            return {...state,interestList:updateInterestList,total:state.total+payload.price}
        }
        case "REMOVE_FROM_INTERESTS": {
            const updatedList= [...state.interestList];
            const filteredList=updatedList.filter((item)=>item.id!== payload.id);
            return {...state,interestList:filteredList}
        }

        default:
            return state
    }

};

export default InterestsReducer;
