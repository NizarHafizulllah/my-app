import Container from "../../components/container"
import NewLayout from "../../components/Layout/newlayout"
import SectionHeader from "../../components/sectionheader"
import { faker } from '@faker-js/faker';
import Table from "../../components/Table/table";
import ButtonAction from "../../components/Table/buttonaction";
import next from "next";


const UserList = () => {
    const userList = [];
    const collumns = [
        {
            field: "name",
            label: "Name",
            size: 'w-3/12',
            extendClass: 'align-text-top'
        },
        {
            field: "address",
            label: "Address",
            size: 'w-7/12',
            extendClass: ''
        },
        {
            field: "action",
            label: "Action",
            size: 'w-2/12',
            extendClass: 'text-center align-text-top'
        }
    ];

    for(var i = 0; i<10; i++){
      
        userList.push(
            {
                id: faker.datatype.uuid(),
                name: faker.name.fullName(),
                address: `${faker.address.street()} ${faker.address.streetAddress()},  ${faker.address.city()}, ${faker.address.country()}`,
                action: <ButtonAction action={() => console.log(faker.name.fullName())} label="Detail"/>
            }
        )
    }

    return (
        <NewLayout title="Epictus | Pengguna">
            <Container>
                <SectionHeader title="User" />
                <Table 
                    title="Table Users" 
                    description="Table ini menampilkan data pengguna aplikasi." 
                    columData={collumns} 
                    dataContent={userList} 
                    isFooter={true}
                    footerData={{ 
                        next: () => {}, 
                        prev: () => {}, 
                        start: 0,
                        end: 10,
                        total: 100

                    }}
                    isLoading={false}

                />
                
            </Container>
        </NewLayout>
    )
}

export default UserList