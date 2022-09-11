
interface DataProps{
    columData: Array<any> 
 }
 
 const TableFooter = (props: DataProps) => {
 
 
     return (
        <tfoot className="bg-slate-700 font-semibold text-left">
            <tr>
                {props.columData.map(column => (
                    <th key={`tfoot-${column.field}`} className={`p-3 ${column.size ? column.size : ''} ${column.extendClassHeader}`}>{column.label}</th>
                ))}
            </tr>
        </tfoot>
     )
 
 }
 
 export default TableFooter