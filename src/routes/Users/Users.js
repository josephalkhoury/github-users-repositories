import React from 'react';
import { get } from '../../api';
import { UserCard } from '../../components';
import { Grid, TextField, CircularProgress, Slide } from '@material-ui/core';
import { useStyles } from './styles';

export default function Users() {
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    let timeout = null; //used to clear timeout on every user search input 

    /**
     * handle user search input by waiting one second
     * after the last user key press to make a remote request
     * and fetch Github users based on the current input value 
     * 
     * @param {*} event on each input key press
     * @returns 
     */
    function handleSearch(event) {
        clearTimeout(timeout);
        setIsLoading(true);
        if (!event.target.value) {
            setUsers([]);
            setIsLoading(false);
            return;
        }
        timeout = setTimeout(
            () => get(`search/users?q=${event.target.value}`).then(response => {
                setIsLoading(false);
                setUsers(response.data.items);
            })
            , 1000);
    }

    return <>
        <Grid container
            className={classes.container}
            alignItems="center"
            justify="center"
            spacing={3}>
            <Grid item xs={10} md={5}>
                <TextField
                    fullWidth
                    placeholder="Find Users..."
                    variant="outlined"
                    onChange={handleSearch} />
            </Grid>
        </Grid>

        {isLoading ?
            <Grid container className={classes.content} justify="center"><CircularProgress /></Grid>
            :
            <Slide direction="up" in mountOnEnter unmountOnExit>
                <Grid
                    container
                    spacing={5}
                    justify="center"
                    className={classes.content}
                >
                    {
                        users.map(user => <Grid key={user.id} item xs={12} sm={9} md={6} lg={4}>
                            <UserCard user={user} />
                        </Grid>)
                    }
                </Grid>
            </Slide>
        }
    </>
}