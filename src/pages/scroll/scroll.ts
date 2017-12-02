import { Component, ViewChild  } from '@angular/core';
import { Content, IonicPage, NavController, NavParams } from 'ionic-angular';
import {CalendarProvider} from "../../providers/calendar/calendar";


@IonicPage()
@Component({
    selector: 'page-scroll',
    templateUrl: 'scroll.html',
    providers: [CalendarProvider],
})
export class ScrollPage {
    @ViewChild(Content) content:Content;
    cal:any = [];
    today:any = [];
    loading:boolean = false;
    itemHeight:number = 0;
    constructor(
        public navCtrl: NavController, 
        public calendar: CalendarProvider,
        public navParams: NavParams
    ) {
        let t = this.calendar.getToday();
        this.today = t;
        let n = this.calendar.nextMonth(t[0], t[1]);
        let year = n[0];
        let month = n[1];
        let tmp = [];
        for(var i=0; i<12;i++){
            let nc = this.calendar.getCalendarYM(year, month);
            tmp.unshift(nc);
            let ym = this.calendar.lastMonth(year, month);
            year = ym[0];
            month = ym[1];
        }

        this.cal = tmp;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ScrollPage');
    }
    ionViewDidEnter(){
        setTimeout(()=>{
            if(this.itemHeight == 0){
                let c = document.getElementsByClassName('calItem')[0];
                this.itemHeight = c.clientHeight + 16;
            }
            this.content.scrollTo(0, this.cal.length* this.itemHeight, 0);
        }, 100);
    }
    checkInitialChange(item, itemIndex, items){
        if(itemIndex == 0){
            return item.year + "年" + item.month + "月";
        }
        if(item.month != items[itemIndex-1].month){
            return item.year + "年" + item.month+ "月";
        }

        return null;
    }
    doInfiniteBottom(infiniteScroll){
        let c = this.cal[this.cal.length - 1];
        let year = c.year;
        let month = c.month;
        if(this.loading == false){
            this.loading = true;
            for(var i=0; i<12;i++){
                let ym = this.calendar.nextMonth(year, month);
                year = ym[0];
                month = ym[1];
                let nc = this.calendar.getCalendarYM(year, month);
                this.cal.push(nc);
            }
            this.loading = false;
            infiniteScroll.complete();
        }
    }
    doInfinite(infiniteScroll){
        let c = this.cal[0];
        let year = c.year;
        let month = c.month;
        if(this.loading == false){
            this.loading = true;
            for(var i=0; i<6;i++){
                let ym = this.calendar.lastMonth(year, month);
                year = ym[0];
                month = ym[1];
                let bc = this.calendar.getCalendarYM(year, month);
                this.cal.unshift(bc);
            }
        }
        setTimeout(()=>{
            console.log(this.itemHeight * 6);
            this.content.scrollTo(0, this.itemHeight * 6, 0);
            setTimeout(()=>{
                infiniteScroll.complete();
                this.loading = false;
            }, 10);
        }, 50);
    }
}
