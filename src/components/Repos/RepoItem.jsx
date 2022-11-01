import React from "react";
import {
  UilLink,
  UilEye,
  UilStar,
  UilUtensils,
  UilInfoCircle,
} from "@iconscout/react-unicons";
import PropTypes from "prop-types";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            <UilLink className="inline mr-1" />
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <UilEye className="mr-2" />
            {watchers_count}
          </div>

          <div className="mr-2 badge badge-success badge-lg">
            <UilStar className="mr-2" />
            {stargazers_count}
          </div>

          <div className="mr-2 badge badge-error badge-lg">
            <UilInfoCircle className="mr-2" />
            {open_issues}
          </div>

          <div className="mr-2 badge badge-warning badge-lg">
            <UilUtensils className="mr-2" />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
}
RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
