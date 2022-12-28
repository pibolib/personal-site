const works = [
["title","type","year","month","indev","link","image"],
["WeeklyBeats 2022 Highlights","Music","2023","1","Y","https://pibolib.bandcamp.com/album/weeklybeats-2022-highlights","#"],
["WeeklyBeats 2022","Music","2022","12","N","https://weeklybeats.com/pibolib?s=&f=8&y=2022","#"],
["TSUNAGARI TOWER: Phoebe's Ascent","Game","2022","7","N","https://pibolib.itch.io/tsunagari-tower","#"],
["Trung Sisters","Game","2022","1","N","https://pibolib.itch.io/trung-sisters","#"],
["未来よりMESSAGE","Music","2021","12","N","https://pibolib.bandcamp.com/album/message","#"],
["GemStreak: Curse of the Time Machine","Game","2021","7","N","https://pibolib.itch.io/gemstreak","#"],
["永遠にPROGRESS","Music","2021","3","N","https://pibolib.bandcamp.com/album/progress","./assets/eienniprogresscover.png"]
];
const worksJSON = arrayToObject(works);
const currentDate = new Date()
const currentYear = currentDate.getFullYear();
var worksEarliestYear = getEarliestYear(worksJSON, currentYear);

const worksDiv = document.getElementById("works-div");
for(var year = currentYear+1; year >= worksEarliestYear; year--) {
    var div = document.createElement("div");
    var title = document.createElement("h3");
    var textData = document.createTextNode(year);
    var workContainerDiv = document.createElement("div");
    title.appendChild(textData);
    workContainerDiv.setAttribute('id',year);
    workContainerDiv.classList.add("work-flexbox");
    var hbar = document.createElement("hr");
    div.appendChild(title);
    div.appendChild(hbar);
    div.appendChild(workContainerDiv);
    worksDiv.appendChild(div);
    //console.log(year);
}

for(work of worksJSON) {
    var div = createWorkCard(work.title, work.type, work.year, work.month, work.indev, work.link, work.image);
    var targetDiv = document.getElementById(work.year);
    targetDiv.appendChild(div);
}

function getEarliestYear(jsonArray, compareYear) {
    var earliestYear = compareYear;
    for(item of jsonArray) {
        if(parseInt(item.year) < compareYear) {
            earliestYear = parseInt(item.year);
        }
    }
    return earliestYear; 
}

function createWorkCard(title, type, year, month, indev, link, image) {
    var div = document.createElement("div");
    div.classList.add([type,indev,"work","card"]);
    var a = document.createElement("a");
    a.setAttribute('href',link);
    a.setAttribute('target',"_blank");
    var img = document.createElement("img");
    img.setAttribute('src',image);
    img.classList.add("work-img");
    a.appendChild(img);
    var p = document.createElement("p");
    pData = document.createTextNode(title + " ("+year+"/"+month+")");
    p.appendChild(pData);
    a.appendChild(p);
    div.appendChild(a);
    return div;
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