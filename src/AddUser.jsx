import React, { Fragment } from "react";
import { Component } from "react";

class AddEditUser extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      name: "",
      username: "",
      email: "",
      password: "",
      konfirmasi_password: "",
      isLoading: false,
      isProccess: false
    };
  }
  render() {
    return (
      <Fragment>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Buat Akun
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="container m-0">
            <form action="">
              <div className="mt-3 mb-3">
                <input
                  type="text"
                  placeholder="Masukkan Nama Lengkap"
                  id="name"
                  className="form-control mt-2"
                />
              </div>
              <div className="mt-3 mb-3">
                <input
                  type="text"
                  placeholder="Masukkan Username"
                  id="username"
                  className="form-control mt-2"
                />
              </div>
              <div className="mt-3 mb-3">
                <input
                  type="text"
                  placeholder="Masukkan E-mail"
                  id="email"
                  className="form-control mt-2"
                />
              </div>
              <div className="mb-3">
                <div class="form-check mt-2 form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Laki-laki
                  </label>
                </div>
                <div class="form-check mt-2 form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Perempuan
                  </label>
                </div>
              </div>
              <div className="mt-3 mb-3">
                <input
                  type="password"
                  placeholder="Masukkan Password"
                  id="password"
                  className="form-control mt-2"
                />
              </div>
              <div className="mt-3 mb-3">
                <input
                  type="password"
                  placeholder="Konfirmasi Password"
                  id="konfirmasi_password"
                  className="form-control mt-2"
                />
              </div>
              <button className="btn btn-primary mt-2 mb-2 float-right">
                Buat Akun
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
