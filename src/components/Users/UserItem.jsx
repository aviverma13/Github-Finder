import React from "react";
import { Link } from "react-router-dom";
import PropType from "prop-types";
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className=" card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="card-title">
            {login}
            <Link
              className="text-base-content text-opacity-40"
              to={`/user/${login}`}
            >
              Visit Profile
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
UserItem.PropType = {
  user: PropType.object.isRequired,
};

export default UserItem;
