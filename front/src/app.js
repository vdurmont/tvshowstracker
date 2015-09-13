var Show = React.createClass({
    render: function() {
        return (
            <li>{this.props.show.title}</li>
        );
    }
});

var ShowList = React.createClass({
    render: function() {
        var shows = [];
        this.props.shows.forEach(function(show) {
            shows.push(<Show show={show} key={show.id} />);
        });
        return (
            <ul>
              {shows}
            </ul>
        );
    }
});

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
