import { Typography, Stack, Box } from '@mui/material';

export const Home = () => {
  return (
      <Box >
        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
        >
          <Typography variant="h3" component="h1" textAlign="center">
            Welcome to Contacts App
          </Typography>
          <Typography variant="h6" component="h2" textAlign="center">
            Manage your contacts efficiently and easily
          </Typography>
        </Stack>
      </Box>
  );
};