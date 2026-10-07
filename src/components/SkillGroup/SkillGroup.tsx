import HeaderCard from "../HeaderCard/HeaderCard";
import SkillItem from "../SkillItem/SkillItem";
import { skills } from '../../data/skills';
import IndicatorDesc from "./IndicatorDesc/IndicatorDesc";

export default function SkillGroup() {
  return(
    <>
      <HeaderCard index="05" title="技術" detail="今の正直なレベル" />
      <IndicatorDesc />
      {skills.map((skill, index) => 
        <SkillItem skill={skill} key={index} />
      )}
    </>
  )
}