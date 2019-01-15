import {gql} from 'apollo-boost';

export const getMakerQuery = gql`
    {
        makers{
            name,
            id
        }
    }
`;

export const getVehiclesQuery = gql`
    {
        vehicles{
            name,
            id
        }
    }
`;

// ! means required and not null
export const addVehicleMutation = gql` 
    mutation($name: String!, $type: String!, $makerId: ID!) {
        addVehicle(name: $name, type: $type, makerId: $makerId) {
            name,
            id
        }
    }
`;

export const getParticularVehicleQuery = gql`
    query($id:ID){
        vehicle(id: $id) {
            name,
            type,
            maker{
                name,
                foundedIn,
                id,
                vehicles{
                    name,
                    id
                }
            }
        }
    }
`;