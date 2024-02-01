

const StatPokemon = ({infoStat,pokemon}) => {
  
  return (
    <li className='card__stat'>
      <h4 className='card__stat-title'>{infoStat.stat.name}</h4>
      <p className={`card__stat-value name-${pokemon?.types[0].type.name}`}>{infoStat.base_stat}</p>
    </li>
  )
}

export default StatPokemon