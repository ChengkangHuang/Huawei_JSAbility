import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';

const link = "https://api.nasa.gov/planetary/apod?api_key=";
const apiKey = 'TpOfvwArMIGaZACIvQfaSZlU1WgM61zSuuX7dif5';
const fullLink = link + apiKey + "&date="

export default {
    data: {
        dateValue: "",
        dateSelect: "",
        title: "",
        date: "",
        image: "",
        explanation: "",
    },
    onInit() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDay();
        this.dateValue = year + "-" + month + "-" + day;
        this.dateSelect = year + "-" + month + "-" + day;
    },
    getApodData() {
        let httpRequest = http.createHttp();
        httpRequest.request(fullLink + this.dateValue, (err, data) => {
            if (!err) {
                console.log('==== ' + 'code:' + data.responseCode);
                console.log('==== ' + 'Result:' + data.result);
                let result = JSON.parse(data.result);
                this.title = result.title;
                this.date = result.date;
                this.explanation = result.explanation;
                this.image = result.url;
            } else {
                console.log('==== ' + JSON.stringify(err));
                httpRequest.destroy();
            }
        });
    },
    dateOnChange(e) {
        this.dateValue = e.year + "-" + e.month + "-" + e.day;
        prompt.showToast({
            message: 'Date: ' + this.dateValue,
            duration: 2000
        })
    },
    goBack() {
        router.back();
    },
    cancel() {
        prompt.showToast({
            message: 'Date not selected',
            duration: 2000
        });
    }
}
