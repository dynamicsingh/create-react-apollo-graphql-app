import React, {Component} from 'react';
import {graphql} from 'react-apollo';
//queries
import {getParticularVehicleQuery} from "../../queries/queries";


class VehicleDetails extends Component {
    displayVehicleDetails() {
        const {vehicle} = this.props.data;
        if (vehicle) {
            return (
                <div>
                    <h4>Vehicle details:</h4>
                    <div><span className={'bold'}>Name:</span> {vehicle.name}</div>
                    <div><span className={'bold'}>Type:</span> {vehicle.type}</div>
                    <div><span className={'bold'}>Vehicle Maker:</span> {vehicle.maker.name}</div>
                    <div className={'bold'} style={{marginTop: 20}}>All vehicle by this maker</div>
                    <ul>
                        {
                            vehicle.maker.vehicles.map((vehicle) => {
                                return (
                                    <li key={vehicle.id}>{vehicle.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            );
        } else {
            return (
                <div>No vehicle detail available, click on vehicle from list above</div>
            );
        }
    }

    render() {
        return (
            <div id="vehicle-details">
                <div>{this.displayVehicleDetails()}</div>
            </div>
        );
    }
}

//binding getParticularVehicleQuery to this component
export default graphql(getParticularVehicleQuery, {
    options: (props) => {//will query getParticularVehicleQuery using the props passed
        return {
            variables: {
                id: props.activeVehicleId
            }
        }
    }
})(VehicleDetails);
