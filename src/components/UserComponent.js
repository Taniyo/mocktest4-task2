import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }
    render() {
        return (
            <div>
            <h1 className = "text-center">Users List</h1>
            <table className = "table table-stripped">
            <thead>
            <tr>
            <td>User Id</td>
            <td>User First Name</td>
            <td>User Last Name</td>
            <td>User email</td>
            <td>User gender</td>
            <td>User ip_address</td>
            </tr></thead>
            <tbody>
                {
                    this.state.users.map(
                        user =>
                        <tr key={user.id}>
                            <td> {user.id}</td>
                            <td> {user.firstName}</td>
                            <td> {user.lastName}</td>
                            <td> {user.email}</td>
                            <td> {user.gender}</td>
                            <td> {user.ip_address}</td>
                            </tr>

                    )
                }
            </tbody>
            </table>
            </div>
        )
    }
}

export default UserComponent