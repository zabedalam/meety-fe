import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { api_searchUser } from "../apis/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      searchResult: [],
    };
  }
  onSearch = async (event) => {
    const response = await api_searchUser(
      localStorage.getItem("accessToken"),
      event.target.value
    );
    const searchResult = await response.json();
    this.setState({ searchResult });
  };
  addHost = async (user) => {
    if (this.props.event) {
      console.log("Hi");
      // This code is probably for adding a host when updating event.
      //console.log(this.props.event._id, this.props.user._id);
      // const response = await api_addHost(
      //   localStorage.getItem("accessToken"),
      //   this.props.event._id,
      //   user._id
      // );
      // const adduser = await response.json();
      // this.props.addHost(adduser);
      //this.setState({ adduser });
    } else {
      this.props.addHost(user);
    }
  };
  openModal() {
    this.setState({
      visible: true,
    });
  }
  closeModal() {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <section className="pb-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            this.openModal();
          }}
          className="btn btn-primary"
        >
          <FontAwesomeIcon icon={faSearch} /> New host
        </button>
        <Modal
          visible={this.state.visible}
          // width="400"
          // height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="row">
            <div className="col-6">
              <label htmlFor="search">Search</label>
              <div>
                <input
                  onChange={(e) => this.onSearch(e)}
                  type="text"
                  placeholder="Search.."
                  name="search"
                />
                {this.state.searchResult.map((value, index) => (
                  <div key={value._id} className="flex">
                    <div>{value.name} </div>
                    <div>
                      <button type="button" onClick={() => this.addHost(value)}>
                        Add User
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="foot">
                <div className="preview-publish">
                  {/* <button className="button">Add User</button> */}
                  <button
                    className="button"
                    type="button"
                    onClick={() => this.closeModal()}
                  >
                    Close{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </section>
    );
  }
}
