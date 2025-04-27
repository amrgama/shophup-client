export class DateUtility {
    // year = 365 * 24 * 60 * 60 * 1000;
    // day = 24 * 60 * 60 * 1000;
    // hour = 60 * 60 *1000;
    // minute = 60 * 1000;
    year = 365 * 24 * 60 * 60 * 1000;
    day = this.year / 365;
    hour = this.day / 24;
    minute = this.hour / 60;
    second = this.minute / 60;

    getDaysFrom(milliSeconds){
        const days = Math.floor( Math.floor(milliSeconds - Date.now()) / this.day );    
        return Math.floor(days);
    }
    
    getHoursFrom(milliSeconds){
        const days = Math.floor( Math.floor(milliSeconds - Date.now()) / this.day ); 
        const hours = Math.floor(days * this.hour);
        
        return Math.floor(hours);
    }
    
    getMinutesFrom(milliSeconds){
        const days = Math.floor( Math.floor(milliSeconds - Date.now()) / this.day ); 
        const hours = Math.floor(days * this.hour);
        const minutes = Math.floor(hours * this.minute);
    
        return Math.floor(minutes);
    }
    
    getSecondsFrom(milliSeconds){
        const days = Math.floor( Math.floor(milliSeconds - Date.now()) / this.day ); 
        const hours = Math.floor(days * this.hour);
        const minutes = Math.floor(hours * this.minute);
        const seconds = Math.floor(minutes * this.second);    
        // console.log("hours in", hours, "days", days, "seconds", seconds)    
        return Math.floor(seconds);
    }
}
