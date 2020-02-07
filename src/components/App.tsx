import * as React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const HeroContainer = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: white;
  background-size: cover;
`;

const Title = styled.div`
  color: #333;
  width: 100%;
  margin: 0;
  padding: 20px 20px 0 20px;
  z-index: 5;
  position: relative;
  top: 0px;
  left: 0px;

  @media screen and (min-width: 600px){
    width: 560px;
    margin: 0 auto;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 25px;
  border-bottom: 1px solid #cecece;
  padding-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1;
`;

const SocialWrapper = styled.div`
  position: relative;
  right: 0; 
  left: 0;
  margin: 0 auto;
  bottom: 15px;
  color: #333;
  width: 400px;
  z-index: 10;
  padding: 20px 0;
`;

const SocialH2 = styled.h2`
  text-align: center;
  margin: 0;
`;

const SocialLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  i {
    color: #007bb6;
  }
`;

const BuiltWith = styled.h4`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3.1px;
  font-weight: 300;
  margin: 0;
  font-size: 12px;
`;

const Grid = styled.div`
  padding: 0 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and (min-width: 600px){
    width: 560px;
    margin: 0 auto;
  }
`;

const GridItem = styled.div`
  flex-basis: 100%;
  padding: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;

  @media screen and (min-width: 600px){
    padding: 20px 0 20px 0;
  }
`;


const App = () => (
  <Wrapper>
    <HeroContainer>
      <Title>
        <HeroTitle>ruben custodio</HeroTitle>
      </Title>
      <Grid>
        <GridItem>
          <img src="/src/images/ruben-boat.jpg" width="100%" />
        </GridItem>
        {/* <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem /> */}
      </Grid>
    </HeroContainer>

    <SocialWrapper>
      <SocialH2>
        <SocialLink href="https://www.linkedin.com/in/rubencustodio/" target="_blank">
          <i className="fa fa-linkedin-square linkedin" aria-hidden="true"></i>{" "}
          linkedin.com/in/rubencustodio
        </SocialLink>
      </SocialH2>
      <BuiltWith>Built using React</BuiltWith>
    </SocialWrapper>
  </Wrapper>
);

export default App;
