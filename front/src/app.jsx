var React = require("react");
var ShowList = require("./showList.jsx");

var SHOWS = [
  {id: 1, title: "The S.H.I.E.L.D"},
  {id: 2, title: "The Glades"},
  {id: 3, title: "The Finder"},
  {id: 4, title: "White Collar"}
];

React.render(
  <ShowList shows={SHOWS} />,
  document.getElementById("content")
);
