import React from "react";
import { cover } from "../assets";

import { useScroll, useTransform } from "framer-motion";

import {
  TextHeroDiv,
  BackgroundImg,
  Paragraph,
  Title,
  Section,
  Img,
} from "../styles";

function TextHero() {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0,1], [0, -1000]);

    return (
    <div>
        <TextHeroDiv>
        <BackgroundImg src={cover} alt="background" />
        <Paragraph>
            jglkwejg gkwjglkgjlk lkjggl;kwjg alglkawjeg alkejgalwjlgk awlkejglak
            alkgjalwkejg alwkejglkawjeg lakjegl awegjlkawejglkawjeglkaw lawkejgl
            alkejgalwjlgk
        </Paragraph>
        <Title style={{x: x}}>We sell furniture</Title>
        </TextHeroDiv>
        <Section>
        <Img src={cover} alt="img 2" />
        <Paragraph>
            jglkwejg gkwjglkgjlk lkjggl;kwjg alglkawjeg alkejgalwjlgk awlkejglak
            alkgjalwkejg alwkejglkawjeg lakjegl awegjlkawejglkawjeglkaw lawkejgl
            alkejgalwjlgk
        </Paragraph>
        </Section>
        <Section>
        <Paragraph>
            jglkwejg gkwjglkgjlk lkjggl;kwjg alglkawjeg alkejgalwjlgk awlkejglak
            alkgjalwkejg alwkejglkawjeg lakjegl awegjlkawejglkawjeglkaw lawkejgl
            alkejgalwjlgk
        </Paragraph>
        <Img src={cover} alt="img 3" />
        </Section>
    </div>
  );
}

export default TextHero;
