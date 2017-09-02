import createReducer from '../createReducer';

let initialState = {
  todos: [], 
};

export default createReducer(initialState = {}, {
    ['addTodo']: (state, action) => {
    	const { todo } = action;
    	return state.unshift(todo)
    },
    ['deleteTodo']: (state, action) => {
    	return state.filter((todo, index) => index !== action.index)
    },
});