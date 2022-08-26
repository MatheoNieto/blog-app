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
  CircularProgress,
} from '@mui/material';
import {green} from '@mui/material/colors';
import {Layout} from '../../components/Layout';
import {useCreatedPost} from '../../core/hooks/createdPost/useCreatedPost';
import {RequestPostsType} from '../../models';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';

const userDefaultCreated = 1;

const CreateArticle: NextPage = () => {
  const [title, setTitle] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();

  const [error, setError] = useState<string | undefined>();
  const {
    mutate: addPost,
    isLoading,
    isSuccess,
  } = useCreatedPost(
    (data: RequestPostsType) =>
      setTimeout(() => Router.push(`/article/${data.id}`), 500),
    error => {
      setError(error);
      setTimeout(() => setError(undefined), 2000);
    },
  );

  const buttonSx = {
    ...(isSuccess && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

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
              justifyContent: 'center',
            }}>
            <Box sx={{m: 1, position: 'relative'}}>
              <Button
                variant="contained"
                sx={buttonSx}
                disabled={isLoading}
                onClick={handleCreate}>
                Publish post {!isSuccess ? <SaveIcon /> : <CheckIcon />}
              </Button>
              {isLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default CreateArticle;
