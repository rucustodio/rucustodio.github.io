import * as React from "react";
import styled from "@emotion/styled";
import { Sun, Moon, File, Mail, Phone } from 'react-feather';

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
  background-size: cover;
`;

const Title = styled.div<{night: boolean;}>`
  color: ${({night}) => night ? '#fff' : '#333'};
  width: 100%;
  margin: 0;
  padding: 20px 20px 0 20px;
  z-index: 5;
  position: relative;
  top: 0px;
  left: 0px;
  box-sizing: border-box;

  @media screen and (min-width: 600px){
    width: 560px;
    margin: 0 auto;
    padding: 20px 0 0 0;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 30px;
  border-bottom: 1px solid #cecece;
  padding-bottom: 20px;
`;

const SocialWrapper = styled.div`
  position: relative;
  right: 0; 
  left: 0;
  margin: 0 auto;
  bottom: 15px;
  color: #333;
  width: 300px;
  z-index: 10;
  padding: 20px 0;
`;

const SocialH2 = styled.h2`
  text-align: center;
  margin: 0;
`;



const SocialLink = styled.a<{night: boolean}>`
  color: ${({night}) => night ? '#fff' : '#333'};
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  i {
    color: #007bb6;
  }

  svg, i {
    margin-right: 5px;
  }
`;

const SocialLinkWrap = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ContactLink = styled(SocialLink)`
  margin: 0;
  flex-basis: 50px;
`;

const BuiltWith = styled.h4<{night: boolean}>`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3.1px;
  font-weight: 300;
  margin: 0;
  font-size: 12px;
  color: ${({night}) => night ? '#fff' : '#333'};
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

const Nav = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  padding: 20px 0;
  line-height: 56px;
  cursor: pointer;

  @media screen and (min-width: 600px){
    right: 0;
  }
`;

const App = () => {
  const [night, setNight] = React.useState(false);

  const handleNightModeToggle = () => {
    document.body.style.backgroundColor = night ? '#fff' : '#1f272b';
    setNight(!night);
  }

  return(
  <Wrapper>
    <HeroContainer>
      <Title night={night}>
        <HeroTitle>ruben custodio</HeroTitle>
        <Nav onClick={handleNightModeToggle}>
          {night ? (<Sun color="white" />) : (<Moon color="#333" />)}
        </Nav>
      </Title>
      <Grid>
        <GridItem>
          <img src="/src/images/ruben-boat.jpg" width="100%" />
        </GridItem>
      </Grid>
    </HeroContainer>

    <SocialWrapper>
      <SocialLinkWrap>
        <ContactLink href="mailto:rucustodio@gmail.com" download target="_blank" night={night}>
          <Mail />
        </ContactLink>
        <ContactLink href="/src/images/RubenCustodioResume.pdf" download target="_blank" night={night}>
          <File />
        </ContactLink>
        <ContactLink href="tel:18054234392" download target="_blank" night={night}>
          <Phone />
        </ContactLink>
      </SocialLinkWrap>
      <SocialH2>
        <SocialLink href="https://www.linkedin.com/in/rubencustodio/" target="_blank" night={night}>
          <i className="fa fa-linkedin-square linkedin" aria-hidden="true"></i>{" "}
          linkedin.com/in/rubencustodio
        </SocialLink>
      </SocialH2>
      <BuiltWith night={night}>Built using React</BuiltWith>
    </SocialWrapper>
  </Wrapper>
);
      }

export default App;
