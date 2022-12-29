// stuff related to works section
const works = [
["title","type","year","month","indev","link","image"],
["WeeklyBeats 2022 Highlights","music","2023","1","Y","https://pibolib.bandcamp.com/album/weeklybeats-2022-highlights","./assets/weeklybeats22highlightscover.png"],
["WeeklyBeats 2022","music","2022","12","N","https://weeklybeats.com/pibolib?s=&f=8&y=2022","./assets/weeklybeats22cover.png"],
["TSUNAGARI TOWER: Phoebe's Ascent","game","2022","7","N","https://pibolib.itch.io/tsunagari-tower","./assets/tsunagaritowercover.png"],
["Trung Sisters","game","2022","1","N","https://pibolib.itch.io/trung-sisters","./assets/trungsisterscover.png"],
["未来よりMESSAGE","music","2021","12","N","https://pibolib.bandcamp.com/album/message","./assets/miraiyorimessagecover.png"],
["GemStreak: Curse of the Time Machine","game","2021","7","N","https://pibolib.itch.io/gemstreak","./assets/gemstreakcover.png"],
["永遠にPROGRESS","music","2021","3","N","https://pibolib.bandcamp.com/album/progress","./assets/eienniprogresscover.png"]
];
const worksJSON = arrayToObject(works);
const currentDate = new Date()
const currentYear = currentDate.getFullYear();
var worksEarliestYear = getEarliestYear(worksJSON, currentYear);
//var validYears = Array.from(new Array(2023-currentYear), (x,i) => i + 2022);
//var selectedMonth = currentDate.getMonth()+1;
createWorkSections();
createWorks();
//createMonthSelectors(selectedMonth);


//stuff related to rss feed

const rssConfig = {
    limit: 100,
    offsetStart: false,
    offsetEnd: false, 
    ssl: true,
    host: "feedrapp.info", // currently using feedr's public instance, may switch in the future
    support: false,
    layoutTemplate: "<div class='rss-feed-container'>{entries}</div>",
    entryTemplate: "<div class={category}><h2>{strippedTitle}</h2><p>{date} <br></p><p class='post-body-short'>{shortBodyPlain}<a onclick='expandPost(this)'>... (expand post)</a></p><div class='post-body-long hide'>{body} <a onclick='closePost(this)'> (close post)</a></div><div>",
    dateFormat: "YYYY/MM/DD @ HH:MM",
    tokens: {
        category: function(entry, tokens) {
            if(entry.title.startsWith("GENERAL:")){
                return "blog-category-general";
            }
            else if(entry.title.startsWith("CREATION:")){
                return "blog-category-creation";
            }
            else if(entry.title.startsWith("DEVLOG:")){
                return "blog-category-devlog";
            }
            return "blog-category-none";
        },
        strippedTitle: function(entry, tokens) {
            return entry.title.replace("GENERAL:","").replace("CREATION:","").replace("DEVLOG:","");
        },
        dateYear: function(entry, tokens) {
            return entry.date.getFullYear();
        },
        dateMonth: function(entry, tokens) {
            return entry.date.getMonth()+1; 
        }
    },
}

jQuery(function($) {
    $("#rss-feeds").rss("https://pibolib-rss.blogspot.com/feeds/posts/default?alt=rss",rssConfig);
});

// function dump
/*
function createMonthSelectors(selectMonth) {
    var p = document.createElement("p");
    var pBaseText = document.createTextNode("Month: ");
    p.appendChild(pBaseText);
    for(var i = 1; i<=12; i++) {
        var a = document.createElement("a");
        a.setAttribute('id',"month-"+i)
        a.setAttribute('onclick',"selectMonth("+i+")");
        a.classList.add("blog-month");
        if(i == selectMonth) {
            a.classList.add("bold");
        }
        var thisMonth = document.createTextNode(i);
        a.appendChild(thisMonth);
        var bar = document.createTextNode(" | ");
        p.appendChild(a);
        if(i != 12){
            p.appendChild(bar);
        }
    }
    document.getElementById("blog-select-month").appendChild(p);
}

function selectMonth(month) {

}
*/

function expandPost(post) {
    post.parentElement.classList.add("hide");
    post.parentElement.nextSibling.classList.remove("hide");
}

function closePost(post) {
    post.parentElement.classList.add("hide");
    post.parentElement.previousSibling.classList.remove("hide");
}

function createWorks() {
    for(work of worksJSON) {
        var div = createWorkCard(work.title, work.type, work.year, work.month, work.indev, work.link, work.image);
        var targetDiv = document.getElementById(work.year);
        targetDiv.appendChild(div);
    }
}

function createWorkSections() {
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
    }
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
    div.classList.add(type,indev,"work","card");
    var a = document.createElement("a");
    a.setAttribute('href',link);
    a.setAttribute('target',"_blank");
    var img = document.createElement("img");
    if(image == "#") {
        image = "./assets/noimagedefault.png";
    }
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

function toggleWorkCategory(tag) {
    for(element of document.getElementsByClassName(tag)) {
        element.classList.toggle("hide");
    }
    document.getElementById("work-toggle-"+tag).classList.toggle("bold");
}

function toggleBlogCategory(tag) {
    for(element of document.getElementsByClassName("blog-category-"+tag)) {
        element.classList.toggle("hide");
    }
    document.getElementById("blog-toggle-"+tag).classList.toggle("bold");
}