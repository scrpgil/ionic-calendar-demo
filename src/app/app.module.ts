import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ScrollPageModule } from '../pages/scroll/scroll.module';
import { SwipePageModule } from '../pages/swipe/swipe.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarProvider } from '../providers/calendar/calendar';


@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        TabsPageModule ,
        BrowserModule,
        ScrollPageModule,
        SwipePageModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CalendarProvider
    ]
})
export class AppModule {}
