import "../CSS/App.css";

function LoginPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1">
            <img
              src="../LOGO.png"
              alt="logo"
              style={{ height: "150px", width: "160px", margin: "0 0 0 20px" }}
            />
          </div>
          <div
            className="col-md-5"
            style={{ position: "relative", top: "200px" }}
          >
            <h2 className="text-center" style={{ fontWeight: "700" }}>
              Welcome back !
            </h2>
            <p style={{ color: "#656871" }}>
              Login to your salesattics account with your username and password
            </p>
            <label className="form-label">User Name / Email</label>
            <input
              type="text"
              placeholder="Enter email and user name"
              className="form-control"
            />
            <br />
            <label className="form-label">Password</label>
            <br />
            <input
              type="text"
              placeholder="Enter password"
              className="form-control"
            />
            <br />
            <span>
              <input type="checkbox" /> Remember me!
            </span>
            <span
              style={{
                color: "#1DA1F2",
                margin: "0 0 0 280px",
                fontWeight: "650",
              }}
            >
              Forget Password?
            </span>
            <button type="submit" className="form-control btn btn-primary mt-3">
              Login
            </button>
            <br />
          </div>
          <div className="col-md-5">
            <img
              src="../Left side.png"
              alt="Leftside"
              style={{ width: "600px", margin: "0 0 0 60px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
