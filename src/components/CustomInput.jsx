export function CustomInput({value, inputType="text", changeParentVariable }) {
    return (
        <input
        required
        type={inputType}
        value={value}
        onChange={(event) => {
            // setValue(event.target.value)
            changeParentVariable(event.target.value)
        }}
        ></input>
    )
}