/**
 * Created by karen on 2016/11/29.
 * Title : 西元日期轉成國曆
 * Description :
 * 在測試時傳入的是UTC的時間，所以在取得時分秒時是使用getUTCXXX的function
 */

//將西元日期轉成國曆
function fullDateToChinse(input_date, time_display) {


	var format_date = "";
	var date = new Date(input_date);


	var year = date.getUTCFullYear() - 1911;  	//getFullYear 取得當前時區的年
	var month = date.getUTCMonth() + 1; 		//getMonth 取得當前時區的月
	var day = date.getUTCDate();				//getDate 取得當前時區的日


	time_display = typeof time_display !== 'undefined' ? time_display : false;

	if (time_display) {

		var hour = date.getUTCHours();		//getHours 取得當前時區的時
		var min = date.getUTCMinutes();		//getMinutes 取得當前時區的分
		var sec = date.getUTCSeconds();		//getSeconds 取得當前時區的秒

		format_date = year + "/" + zeroFill(month, 2) + "/" + zeroFill(day, 2) + " " + zeroFill(hour, 2) + ":" + zeroFill(min, 2) + ":" + zeroFill(sec, 2);
	} else {
		format_date = year + "/" + zeroFill(month, 2) + "/" + zeroFill(day, 2);
	}

	return format_date;
}


// 位數補0
// 例如：
// var month = 2;
// console.log(zeroFill(month,2)) // 02
function zeroFill(val, length) {
	var str = '' + val;
	while (str.length < length) {
		str = '0' + str;
	}
	return str;
}



var datetimeWithoutTime = fullDateToChinse("2016-11-29T17:27:24.603");
console.log(datetimeWithoutTime); //﻿105/11/29
var datetime = fullDateToChinse("2016-11-29T17:27:24.603", true);
console.log(datetime); //﻿105/11/29 17:27:24

// 註：2016-11-29T17:27:24.603  -  The T in the date string, between the date and time, indicates UTC time.
// UTC (Universal Time Coordinated)  is the same as GMT (Greenwich Mean Time).
// reference : http://www.w3schools.com/js/js_date_formats.asp