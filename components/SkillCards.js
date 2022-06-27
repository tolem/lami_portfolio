import { SimpleGrid } from "@chakra-ui/react";
import { MotionBox } from "./MotionBox";
import skillsList from "../data/portfolio/skillsList";
import SkillCard from "./SkillCard";

import { FadeInWrapper } from "./FadeInWrapper";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const SkillCards = () => {
  return (
    <MotionBox variants={container} initial="hidden" animate="visible">
      <SimpleGrid columns={[1, 1, 2]} spacing={4}>
        {skillsList().map((object, index) => (
          <FadeInWrapper key={object.name}>
            <SkillCard
              key={object.name}
              name={object.name}
              description={object.description}
              image={object.image}
            />
          </FadeInWrapper>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default SkillCards;
