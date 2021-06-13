import React from 'react';
import { Grid, TextField, CircularProgress, Breadcrumbs, Typography, Slide } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { get } from '../../api';
import { RepoCard } from '../../components';
import { useStyles } from './styles';

export default function Repos(props) {
    const username = props.match.params.username || '';
    const classes = useStyles();
    const [repos, setRepos] = React.useState([]);
    const [user, setUser] = React.useState({});
    const [searchText, setSearchText] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    /**
     * used to fetch a Github user's profile and repositories
     * based on the url username parameter
     */
    React.useEffect(() => {
        if (username) {
            setIsLoading(true);
            get(`users/${username}/repos`).then(response => {
                setIsLoading(false);
                setRepos(response.data);
            });
            get(`users/${username}`).then(response => setUser(response.data));
        }
    }, [username]);

    function handleSearch(event) {
        setSearchText(event.target.value);
    }

    /**
     * filter Github user repositories based on user search input value
     * when no input is entered display all Github user repositories
     * @returns filtered Github user repositories
     */
    function getFilteredRepos() {
        if (!searchText || !searchText.trim()) return repos;
        return repos.filter(repo => repo.name?.includes(searchText));
    }

    const filteredRepos = getFilteredRepos();

    return <Grid container spacing={2} className={classes.container} justify="center">
        <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography className={classes.link} color="primary" onClick={() => props.history.push('/users')}>
                    Users
                </Typography>
                <Typography color="textPrimary">{username}</Typography>
            </Breadcrumbs>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <div>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={8} sm={6} md={12}>
                        <img
                            className={classes.avatar}
                            src={user.avatar_url}
                            alt={user.login}
                            width='90%'
                        />
                    </Grid>
                    <Grid item xs={8} sm={6} md={12}>
                        <div className={classes.inline}><h3>{user.name || ''}</h3></div>
                        <div className={classes.inline}><p>{user.login || ''}</p></div>
                        {user.email && <div className={classes.inline}>
                            <MailOutlineIcon />
                            <p>{user.email}</p>
                        </div>}
                        {user.location && <div className={classes.inline}>
                            <LocationOnIcon />
                            <p>{user.location}</p>
                        </div>}
                        {user.twitter && (<div className={classes.inline}>
                            <TwitterIcon />
                            <p>{`@${user.twitter}`}</p>
                        </div>)}
                    </Grid>
                </Grid>
            </div>
        </Grid>
        <Grid item xs={12} md={9}>
            {isLoading ?
                <Grid container className={classes.loader} direction='column' alignItems='center' justify='center'>
                    <Grid item><CircularProgress /></Grid>
                </Grid>
                :
                <>
                    <TextField
                        className={classes.searchInput}
                        placeholder={`Search ${username}'s repositories...`}
                        variant="outlined"
                        fullWidth
                        value={searchText}
                        onChange={handleSearch} />
                    <Slide direction="up" in mountOnEnter unmountOnExit>
                        <Grid container spacing={5} alignItems="stretch">
                            {filteredRepos.map(repo => <Grid key={repo.id} item xs={12} md={6}>
                                <RepoCard repo={repo} />
                            </Grid>)}
                        </Grid>
                    </Slide>
                </>
            }

        </Grid>
    </Grid>
}