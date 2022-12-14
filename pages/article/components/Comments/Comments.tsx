import React, {useState, useEffect} from 'react';
import {Grid, TextField, Button, Alert, Box, Typography, Divider} from '@mui/material';
import {CommentTemporalType} from '../../../../models';
import {makeStyles} from '../../styles';

const Comments = () => {
  const [listComments, setListComments] = useState<CommentTemporalType[]>([]);
  const [comment, setComment] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();

  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    return () => setListComments([]);
  }, []);

  const handleCreate = () => {
    if (!comment || !name || !email) {
      setError('All field are required.');
      setTimeout(() => setError(undefined), 1000);
      return;
    }

    setListComments([
      ...listComments,
      {
        body: comment,
        email,
        name,
      },
    ]);
  };

  const renderComments = () => {
    return listComments?.map((comment, index) => (
      <Box key={`${index}`}>
        <Typography
          sx={
            makeStyles.textBold
          }>{`${comment.name} (${comment.email})`}</Typography>
        <Typography>{comment.body}</Typography>
      </Box>
    ));
  };

  return (
    <>
      {error && (
        <Alert variant="outlined" severity="error" sx={{marginBottom: 2}}>
          {error}
        </Alert>
      )}
      <Box
        component="form"
        sx={{
          padding: 2,
          borderRadius: 10,
          marginBottom: 1,
          '& .MuiTextField-root': {m: 1},
        }}
        noValidate
        autoComplete="off">
        <Grid
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextField
            label="comment"
            variant="standard"
            onChange={event => setComment(event.target.value)}
            multiline
          />
          <TextField
            label="name"
            variant="standard"
            onChange={event => setName(event.target.value)}
          />
          <TextField
            label="email"
            variant="standard"
            onChange={event => setEmail(event.target.value)}
          />

          <Button variant="contained" onClick={handleCreate}>
            publish comment
          </Button>
        </Grid>
      </Box>
      <Divider>Comments</Divider>

      {renderComments()}
    </>
  );
};

export default Comments;
