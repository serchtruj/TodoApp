export default function InputModal(props) {
    return(
        <>
        <input 
            type="text"
            value={props.inputUser}
            onChange={(e => props.handleChange(e.target.value))}
            autoFocus
            placeholder={props.currentEdit === "" ? "Enter new task" : props.currentEdit}
        />
        <button onClick={props.confirmTask}>Confirm</button>
        <button onClick={props.declineTask}>Decline</button>
        </>
    )
}