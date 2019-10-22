// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    UPDATE_ITEM: "UPDATE_ITEM" 
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  
  const updateItem = (id) => ({
    type: Types.UPDATE_ITEM,
    payload: id
  });
  
  export default {
    createItem,
    deleteItem,
    updateItem,
    Types
  };