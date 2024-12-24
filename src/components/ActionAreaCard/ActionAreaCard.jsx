import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                    sx={{}}
                />
                <CardContent sx={{ backgroundColor: "var(--primary-color)" }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "var(--fourtynary-color)" }}>
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'var(--fourtynary-color)' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
