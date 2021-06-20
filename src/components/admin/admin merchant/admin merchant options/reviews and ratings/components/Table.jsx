import * as React from "react";
import { Reviews } from "../../../../../../model/newItems";

const Table = ({ paged, handleClick, prev }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Reviews</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {paged.map((item, index) => (
          <tr
            onClick={(e) =>
              handleClick(
                e,
                item,
                Math.ceil(
                  item["reviews&ratings"].reduce((a, b, index, arr) => {
                    return { ...arr[index], rating: a.rating + b.rating };
                  }).rating / item["reviews&ratings"].length
                )
              )
            }
            key={index}
          >
            <td>{index + prev + 1}</td>
            <td>{item.name}</td>
            <td>
              {item["reviews&ratings"].filter((review) => review.review).length}
            </td>
            <td>
              {Math.ceil(
                item["reviews&ratings"].reduce((a, b, index, arr) => {
                  return { ...arr[index], rating: a.rating + b.rating };
                }).rating / item["reviews&ratings"].length
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
