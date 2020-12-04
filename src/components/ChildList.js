export default function ChildList (props) {
  return(
    <ul>
      {props.taskList.map((task, index) => (
        <li key={index}>
        {task.name}
          <button onClick={() => props.handleDelete(index)}>Delete</button>
          <button onClick={() => props.handleEdit(index, task.name)}>Edit</button>
          <button onClick={() => props.handleAddSub(index)}>Add sublist</button>
          <SubChild 
            parentIndex={index} 
            subList={task.subTask} 
            handleSubDel={props.handleDelete} 
            handleSubEdit={props.handleEdit}
          />
        </li>
      ))}
    </ul>
  )
}
  
function SubChild(props){
  return(
    <ul>
      {props.subList.map((task, index)=> (
        <li key={index}>
          {task.name}
          <button onClick={() => props.handleSubDel(index, props.parentIndex)}>Delete</button>
          <button onClick={() => props.handleSubEdit(index, task.name, props.parentIndex)}>Edit</button>
        </li>
      ))}
    </ul>
  )
}


