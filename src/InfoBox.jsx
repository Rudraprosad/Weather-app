import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const IMG_URL = "https://plus.unsplash.com/premium_photo-1669868119012-f5ea10b9d3f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxOc2FjbHpQMDJKSXx8ZW58MHx8fHx8";
    
    
    return (
        <div className="infoBox">
          
          <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature: {info.temperature}&deg;C</p>
          <p>Max Temp: {info.tempMax}&deg;C</p>
          <p>Min Temp: {info.tempMin}&deg;C</p>
          <p>Humidity: {info.humidity}%</p>
          <p>The weather can be described as {info.description} and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
        </div>
    )
}
