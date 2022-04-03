import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Button from '@mui/material/Button';
import { jssPreset, StylesProvider, makeStyles} from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Inconsolata, monospace',
    },
  });


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #1f6f8b 30%, #1f6f8b 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 34,
      
    },
  });

  

export default function CardWork({ product: { id, name, liveCode, source, image, info, description } }) {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();
    

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
  <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={name}
            />
            <CardContent  >
                <Typography  gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button className={classes.root} variant="contained" href={liveCode} target='_blank' size="small" >
                    Live code
                </Button>
                <Button  href={source} target='_blank' size="small" >
                    Source
                </Button>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h6"paragraph >Tecnologias y herramientas usadas:</Typography>
                    <Typography  paragraph>
                        {info}
                    </Typography>
                    <Typography  variant="h6"paragraph >
                        Descripcion:
                    </Typography>
                    <Typography paragraph>
                        {description}
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
        </ThemeProvider>
    );
}