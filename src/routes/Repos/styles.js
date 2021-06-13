import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    loader: {
        width: '100%',
        height: '50vh'
    },
    inline: {
        display: 'flex',
        alignItems: 'center',
    },
    container: { padding: '10px' },
    searchInput: { marginBottom: '10px' },
    link: { cursor: 'pointer' },
    avatar: { borderRadius: '50%' }
}));
