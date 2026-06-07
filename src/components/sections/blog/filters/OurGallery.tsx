import Link from "@mui/material/Link";
import FilterWrapper from "./FilterWrapper";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
} from "data/images";
import Image from "components/base/Image";
import Grid from "@mui/material/Grid";

const galleryItems = [
  { id: 1, image: gallery1, title: "Fresh Fruits" },
  { id: 2, image: gallery2, title: "Organic Vegetables" },
  { id: 3, image: gallery3, title: "Healthy Snacks" },
  { id: 4, image: gallery4, title: "Dairy Products" },
  { id: 5, image: gallery5, title: "Beverages" },
  { id: 6, image: gallery6, title: "Bakery Items" },
  { id: 7, image: gallery7, title: "Bakery Items" },
  { id: 8, image: gallery8, title: "Bakery Items" },
];

const OurGallery = () => {
  return (
    <FilterWrapper title="Our Gallery">
      <Grid container spacing={1}>
        {galleryItems.map((item) => (
          <Grid
            key={item.id}
            component={Link}
            href="#"
            size={3}
            sx={{ height: 100 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              sx={{
                width: 1,
                height: 1,
                objectFit: "cover",
                borderRadius: 1.5,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </FilterWrapper>
  );
};

export default OurGallery;
