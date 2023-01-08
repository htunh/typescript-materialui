import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { AnimeCardProps } from '../../interfaces/common/AnimeCardTypes';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight: 300,
    zIndex: 1,
  },
  cardHovered: {
    position: 'absolute',
    minWidth: 300,
    minHeight: 420,
    transform: 'scale3d(1.05, 1.05, 1)',
    zIndex: 3,
  },
});
const AnimeCard = ({ rank, image, title, date, rating }: AnimeCardProps) => {
  const {
    jpg: { image_url },
  } = image;
  const { from, to } = date;

  const classes = useStyles();

  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });

  return (
    <Card
      className={classes.root}
      classes={{ root: state.raised ? classes.cardHovered : '' }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
      elevation={state.shadow}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='250px'
          width='100%'
          image={image_url}
          alt='anime image'
        />
        <CardContent sx={{ paddingTop: 1 }}>
          <Typography
            gutterBottom
            variant='body2'
            component='div'
            align='center'
          >
            {title}
          </Typography>
          {state.raised && (
            <Box
              width='100%'
              minHeight={150}
              alignItems='center'
              justifyContent='center'
              paddingTop={2}
            >
              <Typography gutterBottom variant='body2' component='div'>
                <Typography fontWeight='bold' component='span' paddingRight={2}>
                  Released:
                </Typography>
                {moment(from).format('ddd ll')}
              </Typography>
              <Typography gutterBottom variant='body2' component='div'>
                <Typography fontWeight='bold' component='span' paddingRight={2}>
                  Rating:
                </Typography>
                {rating}
              </Typography>
              <Typography gutterBottom variant='body2' component='div'>
                <Typography fontWeight='bold' component='span' paddingRight={2}>
                  Latest:
                </Typography>
                {to ? moment(to).format('ddd ll') : 'now'}
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              background: '#cb6da9',
              position: 'absolute',
              top: 0,
              right: 0,
              padding: 1,
            }}
          >
            {rank}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AnimeCard;
