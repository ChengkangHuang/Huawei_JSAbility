import router from '@system.router';

export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    toNextPage() {
        console.log('==== ' + 'Btn clicked: Next');
        router.push({
            uri: 'pages/page2/page2',
            params: { src: 'Data from Index'}
        });
    },
    toApod() {
        console.log('==== ' + 'Btn clicked: To Apod');
        router.push({
            uri: 'pages/apodPage/apodPage'
        });
    }
}
