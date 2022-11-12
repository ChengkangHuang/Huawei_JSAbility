import router from '@system.router';

export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = "Page 2";
    },
    goBack() {
        console.log('==== ' + 'Btn clicked: Go Back');
        router.enableAlertBeforeBackPage({
            message: 'Sure go back?'
        })
        router.back();
    }
}
