import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
// import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
// import CollapseListItem from './CollapseListItem';
// import ListItem from './ListItem';

const DrawerItems = () => {
  return (
    <>
      <Stack
        pt={4.5}
        px={3.5}
        pb={0}
        spacing={3}
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        bgcolor="primary.dark"
        position="sticky"
        top={0}
        zIndex={1000}
      >
        <ButtonBase component={Link} href="/" disableRipple>
          <Typography
            variant="h3"
            color="primary.main"
            fontWeight={600}
            letterSpacing={1}
          >
            Grocery
          </Typography>
        </ButtonBase>

        <TextField
          id="category-search"
          variant="filled"
          color="secondary"
          placeholder="Search categories..."
          sx={{ mt: 1.5, width: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconifyIcon icon={'lets-icons:search-alt'} />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {/* <List sx={{ mt: 1 }}>
        {quickLinks.map((item) => (
          <ListItem key={item.id} data={item} />
        ))}
      </List> */}

      <Divider />

      {/* <List>
        {categorires.map((item) => (
          <CollapseListItem key={item.id} data={item} />
        ))}
      </List> */}

      <Stack position="sticky" mt="auto" bottom={0} left={0} width={1}>
        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ borderRight: 1, borderTop: 1, borderRadius: 0, borderColor: 'secondary.dark' }}
          startIcon={<IconifyIcon icon="carbon:help" />}
          fullWidth
        >
          Help
        </Button>
        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ borderTop: 1, borderRadius: 0, borderColor: 'secondary.dark' }}
          startIcon={<IconifyIcon icon="cil:chat-bubble" />}
          fullWidth
        >
          Chat
        </Button>
      </Stack>
    </>
  );
};

export default DrawerItems;
