import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Moves from "./Moves";
import HeaderPoke from "./shared/HeaderPoke";
import "./styles/pokemonDetails.css";
import StatPokemon from "./Pokedex/StatPokemon";
import "../components/Pokedex/style/pokemonCard.css";

const PokemonDetails = ({ stat }) => {
  const [pokeInfo, setPokeInfo] = useState();

  const { name } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    axios.get(URL)
      .then((res) => setPokeInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <HeaderPoke />
      <div className="containe">
      <article className="card__details">
        <header className={`card__header-detail bg-${pokeInfo?.types[0].type.name}`}
        >
          <h3 className={`number_id name-${pokeInfo?.types[0].type.name}`}>
            #{pokeInfo?.id}
          </h3>
          <img
            className="card__detail-avatar"
            src={pokeInfo?.sprites.other["official-artwork"]["front_default"]}
            alt=""
          />
        </header>
        <div>
        <h1 className={`card__name name-${pokeInfo?.types[0].type.name}`}>
          {pokeInfo?.name}
        </h1>
        </div>
        <hr className="hr__detail" />
        <div>
          <ul className="detail-pokemon">
            <li>
              Weight<h4 className="detail-pokemon__info">{pokeInfo?.weight}</h4>
            </li>
            <li>
              Height<h4 className="detail-pokemon__info">{pokeInfo?.height}</h4>
            </li>
          </ul>
          <div className="card__detail-container">
            <ul className="detail__info-type">
              <h3
                className={`card__name-detail -${pokeInfo?.types[0].type.name}`}
              >
                Type{" "} {" "}

              </h3>

              {pokeInfo?.types.map((slot) => (
                <li
                  className={`card__detail-type cl-${pokeInfo?.types[0].type.name}`}
                  key={slot.type.url}
                >
                  {slot.type.name}
                </li>
              ))}

            </ul>
            <ul className="detail__info-skill">
              <h3
                className={`card__name-detail namee-${pokeInfo?.types[0].type.name}`}
              >
                Skills
                
              </h3>
              {pokeInfo?.abilities.map((hab) => (
                <li className="card__detail-skills" key={hab.ability.url}>
                  {hab.ability.name}
                </li>
              ))}
            </ul>
          </div>

          <section className="contain">
            <ul className="stat"> 
              {pokeInfo?.stats.map((stat) => (
            <StatPokemon
              pokeInfo={pokeInfo}
              key={stat.stat.url}
              infoStat={stat}
            />
          ))}
            </ul>
          </section>
        </div>
      </article>
      <Moves pokeInfo={pokeInfo} />
    </div>
    </div>
  );
};

export default PokemonDetails;