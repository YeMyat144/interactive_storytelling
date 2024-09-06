import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, TextField, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  searchBar: {
    margin: '20px 0',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Home() {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const stories = [
    { id: 1, title: 'The Dark Forest', category: 'Fantasy' },
    { id: 2, title: 'The Treasure Hunt', category: 'Adventure' },
    { id: 3, title: 'The Dragon\'s Lair', category: 'Fantasy' },
    { id: 4, title: 'The Haunted Mansion', category: 'Horror' },
    { id: 5, title: 'The Mysterious Island', category: 'Adventure' },
    { id: 6, title: 'The Secret Tunnel', category: 'Adventure' },
    { id: 7, title: 'The Hidden Temple', category: 'Adventure' },
    { id: 8, title: 'The Forbidden City', category: 'Fantasy' },
    { id: 9, title: 'The Enchanted Forest', category: 'Fantasy' },
    { id: 10, title: 'The Witch\'s Cottage', category: 'Horror' },
  ];

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Home</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>About</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </Toolbar>
      </AppBar>

      <div className={classes.searchBar}>
        <TextField
          fullWidth
          label="Search stories..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Grid2 container spacing={3}>
        {filteredStories.slice(0, 9).map(story => (
          <Grid2 item xs={12} sm={6} md={4} key={story.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={`https://via.placeholder.com/300?text=${story.title}`}
                title={story.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {story.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A brief description of {story.title}.
                </Typography>
                <Button component={Link} to={`/Story/${story.id}`} variant="contained" color="primary">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default Home;
