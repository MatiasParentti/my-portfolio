import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    buton: {
        background: '#1F6F8B',
        color: '#fff',
        display: ' inline-block',
        padding: '.50rem 1rem',
        
        '&:hover': {
            boxShadow: '0 10px 36px rgba(0,0,0,.15)',
            color: '#1C2B2D',
        },
    },
    buton2: {
        marginLeft: 'auto',
        color: '#1C2B2D',
    },
    action: {

        padding: '1rem',
    },
});


export default function WorkCard({ product: { id, name, liveCode, source, image, info } }) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={name}
                    height="140"
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {info}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.action}>

                <Button className={classes.buton} href={liveCode} target='_blank' size="small" >
                    Live code
                </Button>
                <Button className={classes.buton2} href={source} target='_blank' size="small" >
                    Source
                </Button>

            </CardActions>
        </Card>
    );
}
