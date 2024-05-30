import React from 'react';

export const initialState = {
    count:0,
};
export const reducer = (state, action) => {
    switch (action.type){
        case "INCREMENT":
            return {count: state.count+1};
        case "Decrement":
            return {count: state.count-1};
        default:
            return state;

    }
};

