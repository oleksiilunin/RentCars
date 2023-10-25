import { useSelector } from 'react-redux';

import CarsList from 'components/CarsList/CarsList';
import SectionWrapper from 'components/SectionWrapper';
import SectionTitle from 'components/SectionTitle';
import { selectFavoriteAdverts } from 'redux/favorites/favoritesSelectors';
import NoResultCard from 'components/NoFavoritesCard';

export default function Favorites() {
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  return (
    <SectionWrapper>
      <SectionTitle title="Your Favorite Cars" />
      {favoriteAdverts.length ? (
        <CarsList carsArray={favoriteAdverts} />
      ) : (
        <NoResultCard />
      )}
    </SectionWrapper>
  );
}
