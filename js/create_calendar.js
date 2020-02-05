function createCalendar(whichDiv){
    var date = new Date();
    var mYear = date.getFullYear();
    var Month = date.getMonth();
    var strCalendar = "";       //宣告 為了創造日曆 的字串。

    var monthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);     // 每月日數陣列。

    mYear = date.getFullYear();
    if( ( (mYear % 4 == 0) && (mYear % 100 != 0) ) || (mYear % 400 == 0) )     
        //判斷閏年(4的倍數為閏年，但百倍數則例外，而400倍數又會回歸閏年)。
        monthDays[1] = 29; 
    date.setDate(1); // 設定Date物件內的日期為該月的第一天。
    var day = date.getDay(); // 該月第一天的星期。
    var total = monthDays[Month]+day; //月的基本天數+月的第一天星期幾(月初前沒用到的空格數)。
    var totalcells = total + ( (total % 7) ? (7-total%7) : 0); // 再加上月底後沒用到的空格數，計算所需格數。

    strCalendar = '<table>';
    strCalendar +='<tr>';
    strCalendar += "<TH>日</TH>";
    strCalendar += '<TH>一</TH>';
    strCalendar += '<TH>二</TH>';
    strCalendar += '<TH>三</TH>';
    strCalendar += '<TH>四</TH>';
    strCalendar += '<TH>五</TH>';
    strCalendar += '<TH>六</TH>';
    strCalendar += '</tr>';

    for(var i=0 ; i < totalcells ; i++){
        if( i%7 == 0 ) strCalendar += "<tr>";  // 一列的開頭。<tr></tr>
        if ( i >= day && i < total ){  //判斷表格在月初~月尾範圍內才放入日期。

            if( i%7==6 )
                strCalendar += "<td id='"+((i-day)+1)+"' class='Saturday'>"+((i-day)+1)+"</td>"; // 禮拜六。
            else if( i%7==0 )
                strCalendar += "<td id='"+((i-day)+1)+"' class='Sunday'>"+((i-day)+1)+"</td>"; // 禮拜日。
            else
                strCalendar += "<td id='"+((i-day)+1)+"'>"+((i-day)+1)+"</td>"; 
            // 在<td>內放入日期。

        }
        else{   //非當月日期則放入空格。
            if( i%7==6 ) 
                strCalendar += "<td class='Saturday'>&nbsp;</td>"; // 禮拜六。
            else if( i%7==0 ) 
                strCalendar += "<td class='Sunday'>&nbsp;</td>"; // 禮拜日。
            else 
                strCalendar += "<td>&nbsp;</td>"; // 其餘<td>內。

        }
        if( i%7==6 ) strCalendar += "</tr>"  // 一列的結尾。</tr>
    }
    strCalendar+='</table>';
    document.getElementById(whichDiv).innerHTML = strCalendar;
    //以innerHTML，直接將字串寫入網頁，建立出日曆。
}