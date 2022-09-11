
interface DataProps{
    columData: Array<any>;
    dataContent: Array<any>;
    isLoading: boolean
    
 }
 
 const TableBody = (data: DataProps) => {

    

     return (
        <tbody className="bg-slate-800">
            {data.isLoading ? (
                <tr>   
                    <td colSpan={data.columData.length} className="p-5 text-white/50">
                        <div className="w-full justify-start">
                            <div className="animate-pulse w-full flex">
                                <div className="flex-1 space-y-4 py-1">
                                    <div className="h-2 bg-slate-500 rounded"></div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-500 rounded col-span-2"></div>
                                            <div className="h-2 bg-slate-500 rounded col-span-1"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-5 gap-4">
                                            <div className="h-2 bg-slate-500 rounded col-span-1"></div>
                                            <div className="h-2 bg-slate-500 rounded col-span-4"></div>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-slate-500 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>

               
                 
            ) : (

            <>
            {data.dataContent.length != 0 ? (
                <>
                    {data.dataContent.map(row => 
                        (
                            <tr key={`row-${row.id}`} className="hover:bg-white/10">
                            {data.columData.map(column => (
                                <td key={`col-${row.id}-${column.field}`} className={`p-3 text-left ${column.extendClassBody}`}>{row[column.field]}</td>
                                ))}
                            </tr>
                        )
                    )}
                </>

            ) : (
                <tr>
                    <td colSpan={data.columData.length} className="p-5 text-center text-white/50">No Data</td>
                </tr>
            )}
            </>
            )}
        </tbody>
     )
 
 }
 
 export default TableBody