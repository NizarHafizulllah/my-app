
interface ButtonProp{
    name: string
    type: string
}


const Button = (props: ButtonProp) => {

    let namaClass = "rounded-md px-5 py-2 m-2 font-semibold shadow-sm shadow-slate-400 border-2 border-slate-400 hover:bg-slate-400";
    if(props.type=="primary"){
        namaClass = "rounded-md px-5 py-2 m-2 font-semibold shadow-sm shadow-green-400 border-2 border-green-400 hover:bg-green-400";
        
    }else if(props.type=="danger"){
        namaClass = "rounded-md px-5 py-2 m-2 font-semibold shadow-sm shadow-rose-500 border-2 border-rose-500 hover:bg-rose-500";
        console.log(props.type)
    }else if(props.type=="info"){
        namaClass = "rounded-md px-5 py-2 m-2 font-semibold shadow-sm shadow-indigo-500 border-2 border-indigo-500 hover:bg-indigo-500";
        console.log(props.type)
    }else if(props.type=="warning"){
        namaClass = "rounded-md px-5 py-2 m-2 font-semibold shadow-sm shadow-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500";
        console.log(props.type)
    }else{
        namaClass = "rounded-md px-5 py-2 m-2 font-semibold shadow-sm shadow-slate-400 border-2 border-slate-400 hover:bg-slate-400";
    }
    

    return (
        <button className={namaClass}>{props.name}</button>       
    )
}

export default Button