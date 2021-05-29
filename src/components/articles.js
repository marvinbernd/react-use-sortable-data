import React from "react";
import { useSortableData } from "../hooks/useSortableData";

export const Articles = ({ articles }) => {
  const { items, requestSort } = useSortableData(articles);

  return (
    <div>
      <button type="button" onClick={() => requestSort("name")}>
        Name
      </button>
      <button type="button" onClick={() => requestSort("upvotes")}>
        Upvotes
      </button>
      <button type="button" onClick={() => requestSort("date")}>
        Date
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ name, upvotes, date }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{upvotes}</td>
              <td>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
