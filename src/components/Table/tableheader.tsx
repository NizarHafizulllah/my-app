
interface TableHeaderProps{
    columData: Array<any>
}

const TableHeader = (props: TableHeaderProps) => {
    return (
        <thead className="bg-slate-700 font-semibold text-left">
            <tr>
                {props.columData.map(column => (
                    <th key={`thead-${column.field}`} className={`p-3 ${column.size ? column.size : ''} ${column.extendClassHeader}`}>{column.label}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader