import { Card, CardActionArea, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';

export default function UserCard(props) {
    const { user } = props;
    const classes = useStyles();
    const history = useHistory();

    function handleClick(username) {
        history.push(`repos/${username}`);
    }

    return <Card variant="outlined" onClick={() => handleClick(user.login)}>
        <CardActionArea>
            <Grid className={classes.container} container alignItems='center'>
                <Grid item xs={6}>
                    <img
                        key={user.avatar_url}
                        className={classes.avatar}
                        src={user.avatar_url}
                        alt={user.login}
                        width='100'
                        height='100' />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5">{user.login}</Typography>
                </Grid>
            </Grid>
        </CardActionArea>
    </Card>
}