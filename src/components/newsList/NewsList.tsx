import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import RssFeedService from 'components/rss/RssFeedService';
import * as React from 'react';

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export class NewsList extends React.Component {
    rssFeedService = new RssFeedService()

    state = {
        dense: false,
        secondary: false,
    };

    componentDidMount() {
        this.rssFeedService.rssHandler('https://olhardigital.com.br/rss', 2);
        this.rssFeedService.rssHandler('http://pox.globo.com/rss/g1/', 2);
        this.rssFeedService.rssHandler('http://rss.uol.com.br/feed/tecnologia.xml', 2);
        this.rssFeedService.rssHandler('https://www.correiobraziliense.com.br/rss/noticia/cidades/rss.xml', 2);
    }

    render() {
        const { dense, secondary } = this.state;

        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">
                            Icon with text
                        </Typography>
                        <div>
                            <List dense={dense}>
                                {generate(
                                    <ListItem>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
