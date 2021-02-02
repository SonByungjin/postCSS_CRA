import React, { Component } from 'react';
import {
    Button,
    ClickAwayListener,
    createStyles,
    MenuItem,
    Paper,
    Switch,
    TextField,
    Theme,
    Typography,
    WithStyles,
    withStyles
} from '@material-ui/core';

const styles = (theme:Theme) => createStyles({
    root : {
        flexGrow : 1
    }
});

interface StyleProps extends WithStyles<typeof styles>{
    theme : Theme;
}

export class Support extends Component<StyleProps> {
    render() {
        return (
            <>
             <TextField 
            //  InputProps={{
            //      readOnly : true
            //  }} 
            //  defaultValue="test" 
            type='number'
            label="test"
            margin='normal'
            variant='outlined'
            placeholder='select'
            // value='testsets'
            //  InputLabelProps-={{
            //      shrink : true
            //  }}
             />
             <Typography
                variant='h1'
             >
                 lets go
             </Typography>
            </>
        );
    }
}
