import React, {Component} from 'react';
import VehicleList from "./containers/VehicleList";
import AddVehicle from "./containers/AddVehicle";
import AppText from "./presentational/AppText";

//apollo client setup
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const graphQLApi = 'http://localhost:4000/graphql';
const client = new ApolloClient({
    uri: graphQLApi
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <AppText/>
                <div className={'App'}>
                    <div><VehicleList/></div>
                    <div>
                        <div style={{marginTop: 30, marginBottom: 5, fontWeight: 600}}>Add New Vehicle</div>
                        <AddVehicle/>
                    </div>
                    <div style={{marginTop: 50}}>
                        <a
                            className="App-link"
                            href="https://github.com/dynamicsingh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Starter kit created by : Bhupinder Singh
                        </a>
                    </div>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
