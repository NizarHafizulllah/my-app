
interface ButtonActionProps{
    action: any
    label: string
}


const ButtonAction = (props: ButtonActionProps) => {
    return (
        <button onClick={props.action} className="bg-gray-700 px-4 py-1 rounded-md border border-white text-sm hover:bg-gray-700/50">{props.label}</button>
    )
}

export default ButtonAction