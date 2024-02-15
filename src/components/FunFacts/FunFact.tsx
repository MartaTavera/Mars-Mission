import { Link } from "react-router-dom";
import { Fact } from "./factList";
import "./FunFact.scss";
import FunFactCategory from "./FunFactCategory";

export default function FunFacts(props: { facts: Fact[] }) {
  const roverList = props.facts.filter((cate) => cate.category === "rover");
  const missionList = props.facts.filter((cate) => cate.category === "mission");
  const environmentList = props.facts.filter(
    (cate) => cate.category === "environment",
  );

  const roverRandom = roverList[Math.floor(Math.random() * 4)];
  const missionRandom = missionList[Math.floor(Math.random() * 4)];
  const environmentRandom = environmentList[Math.floor(Math.random() * 4)];

  const funfactList = [roverRandom, missionRandom, environmentRandom];

  return (
    <body>
      <FunFactCategory facts={funfactList} />
    </body>
  );
}
