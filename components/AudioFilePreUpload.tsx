import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: '200px'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const AudioFilePreUpload = ({audioFile, clearSelected}: {audioFile: File, clearSelected: Function}) => {
  const classes = useStyles();
  return (
    audioFile === undefined ? <></> : 
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Selected file:
        </Typography>
        <Typography variant="h5" component="h2">
          {audioFile.name} 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Size: {audioFile.size}
        </Typography>
        <Typography variant="body2" component="p">
          Is ready to convert to tab. Hit next to upload
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small" onClick={() => clearSelected()}>Clear</Button>
      </CardActions>
    </Card>
  )
}

export default AudioFilePreUpload