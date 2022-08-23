import React, {useState} from 'react';
import type {NextPage} from 'next';
import {
  Box,
  TextField,
  Container,
  Divider,
  Button,
  Grid,
  Alert,
} from '@mui/material';
import {Header} from '../../components/Header';
import Link from 'next/link';

const CreateArticle: NextPage = () => {
  const [title, setTitle] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();

  const [name, setName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [imageProfile, setImageProfile] = useState<string | undefined>();

  const [error, setError] = useState<string | undefined>();

  const handleCreate = () => {
    if (
      !title ||
      !description ||
      !name ||
      !lastName ||
      !email ||
      !imageProfile
    ) {
      setError('Are required all fields');
      setTimeout(() => setError(undefined), 1000);
    }
  };

  return (
    <>
      <Header title="Writing a blog" />
      <Container maxWidth="md">
        <Box component="div" sx={{p: 20, height: '100vh'}}>
          {error && (
            <Alert variant="outlined" severity="error" sx={{marginBottom: 2}}>
              {error}
            </Alert>
          )}
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': {m: 1, width: '100%'},
            }}
            noValidate
            autoComplete="off">
            <Divider>Info Blog</Divider>
            <TextField
              label="Title"
              onChange={event => setTitle(event.target.value)}
              required
            />
            <TextField
              label="Description"
              onChange={event => setDescription(event.target.value)}
              multiline
              required
            />

            <Divider>Author</Divider>
            <TextField
              label="Name"
              onChange={event => setName(event.target.value)}
              required
            />
            <TextField
              label="Last name"
              onChange={event => setLastName(event.target.value)}
              required
            />
            <TextField
              label="Email"
              onChange={event => setEmail(event.target.value)}
              required
            />
            <TextField
              label="Link image profile"
              onChange={event => setImageProfile(event.target.value)}
              required
            />
            <Grid
              container
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Link href="/">
                <Button variant="outlined">Back</Button>
              </Link>
              <Button variant="contained" onClick={handleCreate}>
                Create post
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CreateArticle;
