/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled.js";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled.js";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled.js";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled.js";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled.js";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled.js";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled.js";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled.js";

const WhatIs = () => {
  return (
    <ResourceSection id="what-is">
      <ResourceSectionHeading>
        What is Science Stream?
      </ResourceSectionHeading>

      <ResourceSectionBody>
      <ol>
      <li><p>Physics</p></li>
        <p>
        Physics is defined as the study of the structure of matter and
        how the tiny particles of the universe interact.The curriculum of 
        Physics for class 11th and 12th focus on the topics like motion in a 
        straight line, units of measurements thermodynamics, kinetic energy, 
        waves and oscillation, laws of motion, motion in a plane, gravitation, 
        mechanical properties of fluids, thermal properties of matter and solids,
        laws of motion.
        </p>
        <li><p>Chemistry</p></li>
        <p>
        Class 11th and 12th Chemistry will no longer only revolve around chemical reactions.
        During these years, you will be taken through various in-depth theories based
        on molecules, the structure of atoms, and chemical equations. Alongside these
        topics, many new topics like equilibrium, hydrogen, classification of elements,
        hydrocarbons, periodicity properties, redox reaction, e-block and p-block elements,
        thermodynamics, organic chemistry, and states of matter.
        </p>
        <li><p>Mathematical</p></li>
        <p>
        Considered one of the most difficult subjects in classes 11th and 12th,
        mathematics needs your time and dedication through the journey. Initially,
        the concepts of this subject will require more focus but, with time you can
        develop a better hold over the subject. Here are some of the important chapters
        trigonometric functions, relations and functions, straight lines, linear
        inequalities, permutations and combinations, probability, statistics, mathematical
        reasoning, quadratic equations, binomial theorem, conic sections, mathematical induction,
        limits, and derivatives, and three-dimensional geometry.
        </p>
        <li><p>Biology</p></li>
        <p>
        Biologys curriculum of these classes will open doors to a new world of the living!
        The core of class 11th will be Botany, whereas, class 12th will focus on Zoology.
        The chapters for the 11th and 12th can be numbered, but the study of Biology will
        be vast. Following are the chapter you must be studying during these years living world,
        plant and animal kingdom, biological classification, gases, body fluids,
        excretory products, morphology and anatomy of flowering plants, cells, biomolecules,
        mineral nutrition, plant respiration, growth and development, chemical coordination.
        </p>
        </ol>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* articles */}
        <ResourceCard>
          {/* <ResourceCardTitle>Articles</ResourceCardTitle> */}
          <ResourceCardLinks>
            {/* <ResourceLink>
              <a
                target="_blank"
                href="https://learntocodewith.me/posts/backend-development/">
                The Beginner&apos; Guide to Backend Development (2022 Guide) ~
                Krystal Tolani
              </a>
            </ResourceLink> */}
            {/* <ResourceLink>
              <a
                target="_blank"
                href="https://www.interviewbit.com/blog/backend-developer-skills/">
                Backend Developer Skills You Must Have - InterviewBit.com
              </a>
            </ResourceLink> */}
          </ResourceCardLinks>
        </ResourceCard>
        {/* videos */}
        <ResourceCard>
          {/* <ResourceCardTitle>Videos</ResourceCardTitle> */}
          <ResourceCardLinks>
            {/* <ResourceLink>
              <a target="_blank" href="https://youtu.be/cbSrsYiRamo">
                Backend Development explained in 2 minutes ~ Mayuko
              </a>
            </ResourceLink> */}
            {/* <ResourceLink>
              <a target="_blank" href="https://youtu.be/5qocqWSdpSI">
                Backend development explained in 10 minutes ~ Simplilearn
              </a>
            </ResourceLink> */}
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default WhatIs;
