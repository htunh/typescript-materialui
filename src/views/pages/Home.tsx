import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AnimeCard from '../../components/AnimeCard';
import { FetchContext } from '../../context/fetchContext';
import { fetchAnime } from '../../redux/features/anime/animeApi';
import { animes } from '../../redux/features/anime/animeSlice';
import { useAppDispatch } from '../../redux/hook';
import { AppDispatch } from '../../redux/store';
import { Box, Grid } from '@mui/material';
import AnimeChart from '../../components/AnimeChart';
import { transformToAnimeChartData } from '../../utils/transformer';

function Home(): JSX.Element {
  document.title = 'Anime Ranking';

  const api = useContext(FetchContext).authFetch;

  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAnime({ api, URL: '/top/anime' }));
  }, []);

  const animeList = useSelector(animes);

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: 4 }}>
        <Grid container spacing={{ xs: 2 }}>
          {animeList?.data.map((anime) => (
            <Grid item xs={4} md={2} key={anime.mal_id}>
              <AnimeCard
                title={anime.title}
                rank={anime.rank}
                image={anime.images}
                date={anime.aired}
                rating={anime.rating}
              />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item xs={3}>
            <AnimeChart data={transformToAnimeChartData(animeList?.data)} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Home;
