import React from "react"

function Signup() {
    return (
      <div>
        <h1>Signup</h1>
        <form>
          <div>
            <input type="text" name="firstname" placeholder="Firstname" />
          </div>
          <div>
            <input type="text" name="lastname" placeholder="Lastname" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  export default Signup;