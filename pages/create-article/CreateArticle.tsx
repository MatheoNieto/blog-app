import React, {useState} from 'react';
import Router from 'next/router';
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
import {Layout} from '../../components/Layout';
import Link from 'next/link';
import {useCreatedPost} from '../../core/hooks/createdPost/useCreatedPost';
import {RequestPostsType} from '../../models';

const userDefaultCreated = 1;

const CreateArticle: NextPage = () => {
  const [title, setTitle] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();

  const [error, setError] = useState<string | undefined>();
  const {mutate: addPost} = useCreatedPost(
    (data: RequestPostsType) =>
      Router.push(`/article/${data.id}`),
    error => {
      setError(error);
      setTimeout(() => setError(undefined), 2000);
    },
  );

  const handleCreate = () => {
    if (!title || !description) {
      setError('Are required all fields');
      setTimeout(() => setError(undefined), 1000);
      return;
    }
    addPost({
      body: description,
      title: title,
      userId: userDefaultCreated,
    });
  };

  return (
    <Layout titleHeader="Writing a blog">
      <Container maxWidth="md">
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
      </Container>
    </Layout>
  );
};

export default CreateArticle;
