import { Card, Grid, Typography, Tooltip } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStyles } from './styles';

export default function RepoCard(props) {
    const classes = useStyles();
    const { repo } = props;
    return <Card className={classes.card}>
        <Grid container className={classes.container} direction="column" justify="space-between">
            <Grid item container alignItems='center'>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">{repo.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <p>{repo.description}</p>
                </Grid>
            </Grid>
            <Grid item container alignItems='center'>
                <Grid item xs={6} md={4} container alignItems="center">
                    <Tooltip title="language"><LanguageIcon /></Tooltip>
                    <p>{repo.language || 'N/A'}</p></Grid>
                <Grid item xs={6} md={4} container alignItems="center">
                    <Tooltip title="watchers"><StarBorderIcon /></Tooltip>
                    <p>{repo.watchers_count}</p></Grid>
            </Grid>
        </Grid>

    </Card>
}