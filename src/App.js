import React from 'react';
//import Paragraph from "./paragraph";
//import {Button} from "./button";
import {movies} from "./movies"
import MoviePreview from "./movie_preview";
import MovieDetails from "./movie_details";



/* Sample Counter App
function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Paragraph text={'Simple Counter'}/>
      <Paragraph text={count}/>
      <p>{count}</p>
      <Button
          buttonText={'Reset'}
          onClickFunction={() => setCount(0)}
      />
      <Button
          buttonText={'Click to Add'}
          onClickFunction={() => setCount(count + 1)}
      />
      <Button
          buttonText={'Click to Subtract'}
          onClickFunction={() => setCount(count - 1)}
      />
    </div>
  );
}*/


function App() {
    const [currentMovie, setCurrentMovie] = React.useState(null);

    //console.log(currentMovie);

    return (
        <div>
            <h1>Movie Information</h1>
            {movies.map((movie) => {
                return (
                    <MoviePreview
                        key={movie.title + movie.releaseYear}
                        movie={movie}
                        onClickFunction={setCurrentMovie}
                    />
                )
            }
            )
            }

            {
                currentMovie ?
                    <MovieDetails currentMovie={currentMovie}/>
                    :
                    <p>No Movie Selected</p>
            }


        </div>
    )
}

export default App;
