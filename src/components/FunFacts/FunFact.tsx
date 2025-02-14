import { Fact } from "./factList";
import "./FunFact.scss";
import FunFactCard from "./FunFactCard";

export default function FunFacts(props: { facts: Fact[] }) {
  const roverList = props.facts.filter((cate) => cate.category === "rovers");
  const missionList = props.facts.filter(
    (cate) => cate.category === "missions",
  );
  const environmentList = props.facts.filter(
    (cate) => cate.category === "environment",
  );

  const roverRandom = roverList[Math.floor(Math.random() * 4)];
  const missionRandom = missionList[Math.floor(Math.random() * 4)];
  const environmentRandom = environmentList[Math.floor(Math.random() * 4)];

  return (
    <div>
      <h1 className="fun-fact-heading">Fun Facts</h1>
      <div className="ff-card-container">
        <FunFactCard
          fact={roverRandom}
          link="/funfact/rover"
          category={props.facts[0].category}
        />
        <FunFactCard
          fact={missionRandom}
          link="/funfact/mission"
          category={props.facts[0].category}
        />
        <FunFactCard
          fact={environmentRandom}
          link="/funfact/environment"
          category={props.facts[0].category}
        />
      </div>
    </div>
  );
}
