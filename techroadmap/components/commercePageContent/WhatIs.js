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
        What is Commerce Stream?
    </ResourceSectionHeading>

    <ResourceSectionBody>
    <ol>
    <li><p>Accountancy</p></li>
        <p>
        The Accountancy subject includes measuring, processing and communication of the
        crucial financial data of a firm. This subject also includes analysing as well as
        calculating the results of the economic steps of an organization.
        </p>
        <li><p>Business Studies</p></li>
        <p>
        Technology has developed to a greater extent today. So, various new methods of
        carrying the business have emerged. The candidates will get familiarized about 
        the same by studying Business Studies after 10th.
        </p>
        <li><p>Economics</p></li>
        <p>
        The candidates who study economics ar micro and macro levels is called Economics. 
        Economics is one of the most interesting subjects, as it offers a detailed study 
        about how the economy in national and international markets work.
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
