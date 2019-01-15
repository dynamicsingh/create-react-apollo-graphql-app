import React, {Component} from 'react';
import {graphql} from 'react-apollo';
//queries
import {getVehiclesQuery} from "../../queries/queries";

//import other components
import VehicleDetails from './VehicleDetail';

class VehicleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeVehicleId: null
        }
    }

    displayVehicles() {
        const data = this.props.data;
        if (data.loading) {
            return (<div>Loading vehicles</div>);
        } else {
            return data.vehicles.map((vehicle, index) => {
                return (
                    <li className={'cursor-pointer'} key={index}
                        onClick={() => this.setState({activeVehicleId: vehicle.id})}>{vehicle.name}</li>
                );
            });
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.displayVehicles()}
                </ul>
                <div><VehicleDetails activeVehicleId={this.state.activeVehicleId}/></div>
            </div>
        );
    }
}

//binding getVehiclesQuery to this component
export default graphql(getVehiclesQuery)(VehicleList);
