import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
//queries
import {getMakerQuery, addVehicleMutation, getVehiclesQuery} from "../../queries/queries";

class AddVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            type: "",
            makerId: ""
        };
    }

    displayMaker() {
        const data = this.props.getMakerQuery; //we don't get .data instead we get name directly
        if (data.loading) {
            return (<option disabled={true}>Loading makers</option>);
        } else {
            return data.makers.map((maker, index) => {
                return (
                    <option key={index} value={maker.id}>{maker.name}</option>
                );
            });
        }
    }

    submitForm(e) {
        e.preventDefault(); //prevent default action on the event, i.e reloads the page
        this.props.addVehicleMutation({
            variables: {
                name: this.state.name,
                type: this.state.type,
                makerId: this.state.makerId
            },
            refetchQueries: [ //runs post running the mutation
                {query: getVehiclesQuery}
            ]
        });
    }

    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <div><input type="text" onChange={(e) => this.setState({name: e.target.value})} value={this.state.name}
                            placeholder="Vehicle Name"/></div>
                <div><input type="text" onChange={(e) => this.setState({type: e.target.value})} value={this.state.type}
                            placeholder="Type"/></div>
                <div>
                    <select onChange={(e) => this.setState({makerId: e.target.value})}>
                        <option>Select Maker</option>
                        {this.displayMaker()}
                    </select>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        )
    }
}

//binding queries and mutations to this component
export default compose(
    graphql(getMakerQuery, {name: "getMakerQuery"}),
    graphql(addVehicleMutation, {name: "addVehicleMutation"}) //we can give whatever we want to use as prop name
)(AddVehicle);