

const Moves = ({pokeInfo}) => {


  return (
    <div className="card__move">
        <h3 className={`card__name-move name-${pokeInfo?.types[0].type.name}`}>Movements</h3>
      <ul className="moves">
        {pokeInfo?.moves.map((move) => (
          <li className="list__move" key={move.move.url}>
            {move.move.name}
          </li>
        ))}
      </ul>


    
    </div>
  );
};

export default Moves;