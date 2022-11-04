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
        What is Arts Stream?
      </ResourceSectionHeading>

      <ResourceSectionBody>
      <ol>
      <li><p>History</p></li>
        <p>
        History subject is one of the traditional subjects of the arts stream.
        It teaches the evolution of human civilisation from the mediaeval period
        to the recent times. The history covers several major historical events 
        that lay the foundation today. Even the history emphasises art and architecture,
        including the history of Indian Art, imparting thorough knowledge about historical 
        architecture, and also gives the idea about works of the great personalities of the world.
        </p>
        <li><p>Geography</p></li>
        <p>
        The geography subject is concerned with the relationships between people and their environment,
        the physical properties of the earth, etc. Geography is one of the most-sought subjects in the Arts stream.
        The geography subjects build a strong foundation of concepts related to landforms, population, economy,
        flora, fauna, economy, transportation, environmental properties, etc. Those who have a genuine interest in
        exploring the environment and discovering the places that exist in the geographical world can pursue a career
        in geography by pursuing BA in Geography.
        </p>
        <li><p>Political Science</p></li>
        <p>
        It is one of the fundamental arts stream subjects which deals with the systems of government 
        and scientific analysis of several political activities by studying their behaviour. 
        Additionally, the political science subject covers the administrative theories, concepts,
        principles and domains of the various subfields of political science, including political methodology,
        political economy, public policy, and international relations. Suppose you are interested in building 
        your career in political science.
        </p>
        <li><p>English</p></li>
        <p>
        English is one of the compulsory subjects in all the streams. It has a well-organised curriculum 
        that covers many different parts of the subject. In addition to putting a lot of emphasis on 
        improving writing and speaking skills, the curriculum also puts a lot of emphasis on improving reading
        skills through English literature. The 11th and 12th grade English classes help students prepare for English
        Literature classes and tests like the IELTS, TOEFL, English Olympiad, etc. 
        </p>
        </ol>
      </ResourceSectionBody>
      
      <ResourceSectionLinks>
        {/* articles */}
        <ResourceCard>
          <ResourceCardTitle></ResourceCardTitle>
          <ResourceCardLinks>
            {/* <ResourceLink>
              <a
                target="_blank"
                href="https://www.coursesafter10th.com/arts/arts-stream/">
                What is arts-stream explained in plain English ~
                FreeCodeCamp
              </a>
            </ResourceLink> */}
            {/* <ResourceLink>
              <a
                target="_blank"
                href="https://skillcrush.com/blog/skills-to-become-a-front-end-developer/">
                Skills to become a front-end developer ~ Skill Crush
              </a>
            </ResourceLink> */}
          </ResourceCardLinks>
        </ResourceCard>
        {/* videos */}
        <ResourceCard>
          {/* <ResourceCardTitle>Videos</ResourceCardTitle> */}
          <ResourceCardLinks>
            {/* <ResourceLink>
              <a target="_blank" href="https://youtu.be/GJ8jidDdWVg">
                What is front-end? ~ Codecademy
              </a>
            </ResourceLink> */}
            {/* <ResourceLink>
              <a target="_blank" href="https://youtu.be/qyHyFsT7Hig">
                Frontend Development explained in 2 mins. ~ Mayuko
              </a>
            </ResourceLink> */}
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default WhatIs;
