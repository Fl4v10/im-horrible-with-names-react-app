import * as X2JS from 'x2js';

class rssItem {
    item: any;

    constructor(item: any) {
        this.item = item;
    }
}

class rssWrapper {
    constructor(public rss: {
        channel: {
            item: rssItem[]
        };
    }) {
    }
}

export default class RssFeedService {
    constructor() {
    }

    rssHandler(feedUrl?: string, size: number = 10) {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        fetch(proxyUrl + feedUrl)
            .then((res) => {
                res.text().then((xml) => {
                    const x2js = new X2JS();
                    var doc = x2js.xml2js(xml) as rssWrapper;
                    if (doc.rss && doc.rss.channel && doc.rss.channel.item) {
                        const items = doc.rss.channel.item.slice(0, size);
                        items.forEach(e => {
                            var domNode = new DOMParser().parseFromString(JSON.stringify(e), "text/html");
                            const url = domNode.querySelectorAll('');
                            console.log('teste:::::::');
                            console.log(url);

                            // const values = Object.keys(e).map(key => e[key]);
                            // values.forEach(f => {
                            //     if (typeof(f) === 'string' && f.indexOf('img') > -1) {
                            //         try {
                            //             var domNode = new DOMParser().parseFromString(f, "text/html");
                            //             const src = domNode.querySelectorAll('img')[0].getAttribute('src');
                            //             console.log(src);
                            //         } catch (error) {
                            //             console.log(`src`);
                            //         }
                            //     }
                            // });
                        });
                    }
                })
            });
    }
}