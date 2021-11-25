import React, { useState } from "react";
import DeleteAccountComponent from "../auth/DeleteAccount";

const Account = (props) => {
  const [accountInfo, setAccountInfo] = useState(props.accountInfo);
  console.log(accountInfo);

  return (
    <div>
      <div className="accountHeader">
        <h1 className="myAcc">My Account</h1>
      </div>
      <div className="mainAcctDiv">
        <div className="userName">{accountInfo.username}</div>
        <div className="password">Password: ****************</div>
        <div className="deleteAcct">
          <DeleteAccountComponent setIsLoggedIn={props.setIsLoggedIn} />
        </div>
      </div>
    </div>
  );
};

export default Account;
