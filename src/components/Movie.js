import React from 'react'
// import { Card,ListGroup,ListGroupItem } from "react-bootstrap";
import { Card, Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Movie(props) {

  let htmlMovie = props.movieList.map((movie) => {

    let genreNames = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      if (props.genreList.length > 0) {
        let genreName = props.genreList.find(
          genre => genre.id === movie.genre_ids[i]
        ).name;
        genreNames.push(genreName);
      }
    }

    return (
      <Card 
      className="col-md-3" 
      style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {genreNames.map(genre => (
              <Badge pill variant="warning" className="my-1">
                <div style={{ fontSize: 11 }}>{genre}</div>
              </Badge>
            ))}
          </Card.Text>
        </Card.Body>
        <Card.Text className="text-secondary ">{movie.overview}</Card.Text>
        <Card.Body>
          <Button onClick={() => props.openModal(movie.id)} className="btn btn-success">
            View Trailer
                </Button>

        </Card.Body>
      </Card>
    )
  })
  return (
    <div className="row">
      {htmlMovie}
    </div>
  )
}