import React, { Component } from "react";
import { connect } from "react-redux";
import "../Staff.css";
import Member from "./Member/Member";
import { setAmount } from "../../../../../reducers/amountSlice";

class StaffList extends Component {
  constructor() {
    super();
    this.state = {
      staff: [],
    };
  }

  componentDidMount() {
    const loadStaff = () => {
      fetch("http://localhost:8080/api/user/staff")
        .then(async (response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.props.setAmount(data.length);
          console.log(data.length);
          this.setState({ staff: data });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    loadStaff();

    setInterval(() => {
      loadStaff();
    }, 5000);
  }

  render() {
    const { searchQuery } = this.props;
    const filteredStaff = this.state.staff.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.telephone.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    return (
      <main className="admin__staff-list">
        {filteredStaff.map((item) => (
          <Member
            key={item._id}
            itemId={item._id}
            name={item.name}
            status={item.status}
            email={item.email}
            telephone={item.telephone}
          />
        ))}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  //
});

const mapDispatchToProps = {
  setAmount,
};

export default connect(mapStateToProps, mapDispatchToProps)(StaffList);
