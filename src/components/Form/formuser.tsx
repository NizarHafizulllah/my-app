import Button from "./button"
import Dropdown from "./dropdown"
import InputText from "./inputtext"

const FormUser = ()  => {

    const levelAdmin = [
            {label: "Super Admin", value: "admin"},
            {label: "Admin Polda", value: "admin_polda"},
            {label: "Admin Polres", value: "admin_polres"},
            {label: "Admin Polsek", value: "admin_polsek"},
            {label: "User", value: "user"}
        ]

    return (
        <>
            <div className='flex space-x-2'>
                <div className='w-6/12'>
                    <InputText 
                    type='text' 
                    id="nama"
                    label='Nama' 
                    placeholder="Masukkan nama anda" 
                    iconSvg={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>  
                    }
                    />
                </div>
                <div className='w-6/12'>
                    <InputText 
                    type='email' 
                    id="email"
                    label='Email' 
                    placeholder="Masukkan email anda" 
                    iconSvg={
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>}
                    />
                </div>
            </div>

            <InputText 
                type='password' 
                id="password"
                label='Password' 
                placeholder="Masukkan password anda" 
                iconSvg={
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">  
                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                    </svg>}
                />
            
            <Dropdown 
                id="level"
                label="Level Acount"
                list={levelAdmin}
                placeholder="Level Acount"
                iconSvg={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 dark:text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>

                }
                fungsi={(event: React.ChangeEvent<HTMLInputElement>) => {alert(event.target.value)}}
            />
            
            
            <Button fungsi={() =>{}} name="Simpan" type="info"/>
        </>
    )
}

export default FormUser