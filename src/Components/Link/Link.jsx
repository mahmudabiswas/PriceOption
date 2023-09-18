import React from "react";

const Link = ({ route }) => {
  console.log(route);

  return (
    <>
      <ul className="ml-10 hover:bg-red-600 p-2">
        <li key={route.id}>
          <a href={route.path}> {route.name} </a>
        </li>
      </ul>
    </>
  );
};

export default Link;
