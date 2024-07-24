

const Movie=({movies})=>{
return(
    <div>
        <ul>
            {movies.map(moviie=>(
                <li key={moviie.id}>
                <h2>{moviie.title}</h2>
            </li>
            ))}
        </ul>
    </div>
)
}
export default Movie