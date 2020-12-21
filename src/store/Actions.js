 export const addtodo = 'ADD_TODO'
 export const deletetodo = 'DELETE_TODO'
 export const edittodo = 'EDIT_TODO'

export function addTodoAction(todo){
    return {
        type: addtodo,
        payload: todo,
        
    }
}
export function deleteTodoAction(id){
    return {
        type: deletetodo,
        payload:id

    }
}
export function edittodoAction(id,txt){
    return {
        type: edittodo,
        payload:{id,txt}

    }
}
