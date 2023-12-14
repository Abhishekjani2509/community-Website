import React from "react";

const Blog = () => {
  return (
    // <div className="container">
    //   <div className="py-4">
    //     <h1>Contact Page</h1>
    //     <form>
    //       <div className="form-group">
    //         <label for="exampleInputEmail1">Email address</label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleInputEmail1"
    //           aria-describedby="emailHelp"
    //         />
    //         <small id="emailHelp" className="form-text text-muted">
    //           We'll never share your email with anyone else.
    //         </small>
    //       </div>
    //       <div className="form-group">
    //         <label for="exampleInputPassword1">Password</label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="exampleInputPassword1"
    //         />
    //       </div>
    //       <div className="form-group form-check">
    //         <input
    //           type="checkbox"
    //           className="form-check-input"
    //           id="exampleCheck1"
    //         />
    //         <label className="form-check-label" for="exampleCheck1">
    //           Check me out
    //         </label>
    //       </div>
    //       <button type="submit" className="btn btn-primary">
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form>
        {/* <form onSubmit={e => onSubmit(e)}> */}
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              // value={name}
              // onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              // value={username}
              // onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              // value={email}
              // onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              // value={phone}
              // onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              // value={website}
              // onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
