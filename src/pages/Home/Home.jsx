
import HomeSwiper from 'components/HomeSwiper';
import {
  HomeContainer,
  HomeHero,
  HomeSubTitle,
  HomeTitle,
  HomeTitleIcon,
  LinkStyled,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeHero>
        <HomeTitle>Find your drive<HomeTitleIcon/></HomeTitle>
        <HomeSubTitle>Explore the best car sharing marketplace</HomeSubTitle>
        <LinkStyled to='/catalog'>Go drive!</LinkStyled>
      </HomeHero>
      <HomeSwiper/>
    </HomeContainer>
  );
};

export default Home;
