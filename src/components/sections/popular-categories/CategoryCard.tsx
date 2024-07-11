import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import customShadows from 'theme/shadows';
import { Category } from 'data/categories';

interface CategoryCardProps {
  data: Category;
}

const CategoryCard = ({ data }: CategoryCardProps) => {
  return (
    <Card
      sx={{
        p: 1,
        pb: 0,
        border: 1,
        borderColor: 'info.main',
        borderRadius: 1.5,
        cursor: 'pointer',
        '&:hover': { borderColor: 'primary.dark', boxShadow: customShadows[1] },
      }}
    >
      <CardMedia
        component="img"
        height={150}
        image={data.image}
        alt="category_image"
        sx={{ objectFit: 'contain' }}
      />
      <CardContent sx={(theme) => ({ p: `${theme.spacing(0.5, 0, 2.5, 0)} !important` })}>
        <Typography variant="subtitle1" textAlign="center" fontWeight={500}>
          {data.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
