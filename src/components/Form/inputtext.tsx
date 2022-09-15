import { ReactNode } from "react"

interface InputTextProps{
    type: string
    id: string
    label: string
    placeholder: string
    iconSvg: ReactNode
}


const InputText = (props: InputTextProps) => {
    return (
        <>
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">{props.label}</label>
            <div className="relative mb-6">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                {props.iconSvg}
            </div>
                <input autoComplete="off" type={props.type} id={props.id} className="bg-gray-50 border border-gray-300 text-gray-900 text-md outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.placeholder} />
            </div>
        </>
       
    )
}

export default InputText