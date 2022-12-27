const works = [
["title","type","year","month","indev","link","image"],
["WeeklyBeats 2022 Highlights","Music","2023","1","Y","https://pibolib.bandcamp.com/album/weeklybeats-2022-highlights","#"],
["WeeklyBeats 2022","Music","2022","12","N","https://weeklybeats.com/pibolib?s=&f=8&y=2022","#"],
["TSUNAGARI TOWER: Phoebe's Ascent","Game","2022","7","N","https://pibolib.itch.io/tsunagari-tower","#"],
["Trung Sisters","Game","2022","1","N","https://pibolib.itch.io/trung-sisters","#"],
["未来よりMESSAGE","Music","2021","12","N","https://pibolib.bandcamp.com/album/message","#"],
["GemStreak: Curse of the Time Machine","Game","2021","7","N","https://pibolib.itch.io/gemstreak","#"],
["永遠にPROGRESS","Music","2021","3","N","https://pibolib.bandcamp.com/album/progress","#"]
];
const worksJSON = arrayToObject(works);
const currentDate = new Date()
var currentYear = currentDate.getFullYear();
var worksEarliestYear = currentYear;
for(var work of worksJSON) {
    if(parseInt(work.year) < worksEarliestYear) {
        worksEarliestYear = parseInt(work.year);
    }
}

const worksDiv = document.getElementById("works-div");
for(var year = currentYear+1; year >= worksEarliestYear; year--) {
    var title = document.createElement("h3");
    var textData = document.createTextNode(year);
    title.appendChild(textData);
    var hbar = document.createElement("hr");
    worksDiv.appendChild(title);
    worksDiv.appendChild(hbar);
    console.log(year)
}
















function arrayToObject(arr) {
	var keys = arr[0];
	var newArr = arr.slice(1, arr.length);

	var formatted = [],
    data = newArr,
    cols = keys,
    l = cols.length;
	for (var i=0; i<data.length; i++) {
			var d = data[i],
					o = {};
			for (var j=0; j<l; j++)
					o[cols[j]] = d[j];
			formatted.push(o);
	}
	return formatted;
}