import React, { Component } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button : {
    margin: theme.spacing(1),
  },
}));

class AddVideoForm extends Component {

  constructor(){
    super()
    
  }

  render() {
    if (!window.web3) {
      return (
        <div>Metamask is required to post videos and send tips.</div>
      )
    } else {
      return (
        <form onSubmit={this.props.submitVideo}>
          <TextField
            id="youtubeLink"
            label="Youtube Link..."
            className={clsx(useStyles.textField, useStyles.dense)}
            margin="dense"
          />
          <TextField
            id="title"
            label="Video Title..."
            className={clsx(useStyles.textField, useStyles.dense)}
            margin="dense"
          />
          <Button variant="contained" size="small" className={useStyles.button}>
            Default
          </Button>
          
        </form>
      )
    }
  }
}

export default AddVideoForm;