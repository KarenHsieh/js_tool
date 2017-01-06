/**
 * Created by karen on 2017/01/05.
 * Title : 日期相減
 * Description :
 *
 */

function dateDiff(start_date, end_date, type) {

	var start = new Date(start_date).getTime();
	var end = new Date(end_date).getTime();

	var diff_total_day;
	var diff_year;
	var diff_month;
	var diff_day;

	//var response = {};

	if(type == "year") {
		diff_year = (end - start) / (12 * 30 * 24 * 60 * 60 * 1000);

		return {"year" : parseInt(diff_year)};

	} else if(type == "detail"){
		var diff_time = end - start;
		diff_total_day = parseInt(diff_time / (24 * 60 * 60 * 1000));

		diff_year = parseInt(diff_total_day / 365);
		var left_days = diff_total_day - (diff_year*365);
		diff_month = parseInt((left_days/30));

		diff_day = parseInt(left_days - (diff_month*30));

		return {"year" : diff_year, "month" : diff_month, "day":diff_day};
	}

}

var s_date = new Date(2012, 6, 10);
var e_date = new Date(2015, 7, 20);
var temp1 = dateDiff(s_date, e_date, "year");
var temp2 = dateDiff(s_date, e_date, "detail");

console.log(temp1);
/*Object {
	year: 3
}*/

console.log(temp2);
/*
Object {
	day: 11,
		month: 1,
		year: 3
}*/
