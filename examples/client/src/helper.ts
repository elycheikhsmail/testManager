const todoUrl = "http://0.0.0.0:4507/todos.json"
 
// get list todo from the rest api
export async function getAll(){
    const response = await fetch(todoUrl) 
    const jsonData = await response.json();
    return jsonData
}
