import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CategoryImage from 'assets/images/categories/1.png';


const CategoryCard = () => {
  return (
    <Card>
      <CardMedia component="img" height="110" image={CategoryImage} alt="task_today_image" />
      <CardContent>
        <Typography variant="subtitle1" color="text.primary" fontWeight={600}>
            Fresh Fruit
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
