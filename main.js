class Link {
	constructor(linkType, site) {
		this.linkType = linkType; //a string (see createLinkIcon for valid keys)
		this.site = site; //a string
	}
}

//takes a string, returns none
function switchActiveSection(newSection) {
	const tabs = document.getElementsByClassName("tab");
	const sections = document.getElementsByClassName("main");
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove("tab-selected");
		if (tabs[i].id == newSection) {
			tabs[i].classList.add("tab-selected");
		}
	}
	for (var i = 0; i < sections.length; i++) {
		sections[i].classList.add("inactive");
		if (sections[i].classList.contains(newSection)) {
			sections[i].classList.remove("inactive");
		}
	}
}

//takes a string and a list of Work objects, returns a section container
function createSection(name, contents) {
	const container = document.createElement("div");
	container.classList.add(name);
	container.classList.add("main");
	for (var i = 0; i < contents.length; i++) {
		const workContainer = createWorkContainer(contents[i]);
		container.appendChild(workContainer);
	}
	return container;
}

function createWorkContainer(workJSON) {
	const container = document.createElement("div");
	container.classList.add("work");
	const span1 = createSpan(workJSON.name, "work-title");
	const span2 = createSpan(" (" + workJSON.date + ") ", "work-date");
	container.appendChild(span1);
	span1.appendChild(span2);
	for (var i = 0; i < workJSON.links.length; i++) {
		const a = document.createElement("a");
		var linkSpan = createSpan(
			workJSON.links[i].linkType + " ",
			"subtextlink"
		);
		a.appendChild(linkSpan);
		a.href = workJSON.links[i].site;
		a.target = "_blank";
		span1.appendChild(a);
		var secondSpan = createSpan(" / ", "subtextlink");
		if (i != workJSON.links.length - 1) {
			span1.appendChild(secondSpan);
		}
	}
	const br = document.createElement("br");
	container.appendChild(br);
	const descriptionDiv = document.createElement("div");
	const description = createSpan(workJSON.description, "en");
	descriptionDiv.appendChild(description);
	container.appendChild(descriptionDiv);
	const accentDiv = document.createElement("div");
	accentDiv.classList.add("work-accent");
	if (workJSON.completionStatus) {
		accentDiv.classList.add("finished");
	} else {
		accentDiv.classList.add("unfinished");
	}
	container.appendChild(accentDiv);
	return container;
}

//takes a Link object, returns a link container containing an image with an a attached
function createLinkIcon(link) {}

function createSpan(text, classes) {
	const span = document.createElement("span");
	const textNode = document.createTextNode(text);
	span.classList.add(classes);
	span.appendChild(textNode);
	return span;
}

function switchTheme(themeJSON) {
	const r = document.querySelector(":root");
	r.style.setProperty("--color-text-main", themeJSON.colorTextMain);
	r.style.setProperty("--color-text-sub", themeJSON.colorTextSub);
	r.style.setProperty("--color-div-bg", themeJSON.colorDivBG);
	r.style.setProperty(
		"--color-div-tab-unselected",
		themeJSON.colorDivTabUnselected
	);
	r.style.setProperty(
		"--color-div-tab-selected",
		themeJSON.colorDivTabSelected
	);
	r.style.setProperty("--color-div-section", themeJSON.colorDivSection);
}

const worksGames = [
	{
		name: "TBD",
		date: "TBD",
		description:
			"New game projects currently under development. Please stand by for further information.",
		links: [],
		completionStatus: false,
	},
	{
		name: "ArcConnect",
		date: "TBD",
		description:
			"Falling block puzzle game currently in development. More details to come soon.",
		links: [],
		completionStatus: false,
	},
	{
		name: "Coin Flip Magicks",
		date: "2023",
		description:
			"A top-down action game where the player uses coins to purchase new abilities and activate special effects. Developed in Godot 4.1 for Windows. Solo project by pibolib for Mini Jam 139.",
		links: [
			new Link("github", "https://github.com/pibolib/coin-flip-magicks"),
			new Link("itch.io", "https://pibolib.itch.io/coin-flip-magicks"),
		],
		completionStatus: true,
	},
	{
		name: "TSUNAGARI TOWER: Phoebe's Ascent",
		date: "2022-23",
		description:
			"A puzzle game where the player is tasked with forming connections on a hexagonal playfield. Developed in Godot 3.5 for Windows and HTML5. Solo project by pibolib for GMTK Game Jam 2022, made into a full version with revamped graphics and BGM postjam.",
		links: [
			new Link("github", "https://github.com/pibolib/tsunagari-tower"),
			new Link("itch.io", "https://pibolib.itch.io/tsunagari-tower"),
		],
		completionStatus: true,
	},
	{
		name: "Trung Sisters",
		date: "2022",
		description:
			"A strategy game which takes place in Vietnam and gives a light take on the story of the Trưng sisters. Developed in Godot 3.3. Team project with my brother for Historically Accurate Game Jam 5, where it received 3rd place for thematic relevancy and 8th place overall.",
		links: [
			new Link("github", "https://github.com/pibolib/trung-sisters"),
			new Link("itch.io", "https://pibolib.itch.io/trung-sisters"),
		],
		completionStatus: true,
	},
	{
		name: "GemStreak: Curse of the Time Machine",
		date: "2021",
		description:
			"A 'falling block' puzzle game which tasks the player with creating lines from left to right made of rhombus shaped pieces. Developed in Godot 3.2. Team project with friends for Godot Wild Jam #35.",
		links: [
			new Link("github", "https://github.com/pibolib/gemstreak"),
			new Link("itch.io", "https://pibolib.itch.io/gemstreak"),
		],
		completionStatus: true,
	},
	{
		name: "DNArcher",
		date: "2019",
		description:
			"A top-down action game where the player can gain abilities from defeated enemies, built in GameMaker Studio 2. Developed solo for Butterscotch Shenanijam 2019, where it received 1st place in fun factor and 3rd place overall.",
		links: [
			new Link("itch.io", "https://pibolib.itch.io/dnarcher"),
			new Link("youtube", "https://youtu.be/SKJGEdmh2ws"),
		],
		completionStatus: true,
	},
];

const worksMusic = [
	{
		name: "TBD",
		date: "TBD",
		description:
			"New album currently in production. Please stand by for further information.",
		links: [],
		completionStatus: false,
	},
	{
		name: "fantasy_contradiction",
		date: "2023",
		description:
			"My third album, the first to be released on Spotify and other streaming platforms.",
		links: [
			new Link(
				"bandcamp",
				"https://pibolib.bandcamp.com/album/fantasy-contradiction"
			),
			new Link(
				"spotify",
				"https://open.spotify.com/album/5LJPaYc5ZXHzxbH2NWrPvO"
			),
			new Link(
				"youtube",
				"https://www.youtube.com/playlist?list=OLAK5uy_nd0tIoWWrEv-4becg4NWgJq-mH2OGeLjI"
			),
		],
		completionStatus: true,
	},
	{
		name: "TSUNAGARI TOWER: Phoebe's Ascent OST",
		date: "2023",
		description: "The full soundtrack of TSUNAGARI TOWER: Phoebe's Ascent.",
		links: [
			new Link(
				"bandcamp",
				"https://pibolib.bandcamp.com/album/tsunagari-tower-phoebes-ascent-ost",
				"youtube",
				"https://www.youtube.com/watch?v=iTYfPnUF-Z4"
			),
		],
		completionStatus: true,
	},
	{
		name: "WeeklyBeats",
		date: "2022",
		description:
			"A challenge I participated in throughout 2022, where participants were challenged to produce one track per week.",
		links: [
			new Link(
				"profile page",
				"https://weeklybeats.com/pibolib?s=&f=8&y=2022"
			),
		],
		completionStatus: true,
	},
	{
		name: "Trung Sisters OST",
		date: "2022",
		description: "The full soundtrack of Trung Sisters.",
		links: [
			new Link(
				"bandcamp",
				"https://pibolib.bandcamp.com/album/trung-sisters-ost"
			),
		],
		completionStatus: true,
	},
	{
		name: "未来よりMESSAGE",
		date: "2021",
		description: "My second album, containing remixes and new tracks.",
		links: [
			new Link("bandcamp", "https://pibolib.bandcamp.com/album/message"),
		],
		completionStatus: true,
	},
	{
		name: "GemStreak: Curse of the Time Machine OST",
		date: "2021",
		description:
			"The full soundtrack of GemStreak: Curse of the Time Machine.",
		links: [
			new Link(
				"bandcamp",
				"https://pibolib.bandcamp.com/album/gemstreak-curse-of-the-time-machine-ost"
			),
		],
		completionStatus: true,
	},
	{
		name: "永遠にPROGRESS",
		date: "2021",
		description:
			"My first album. Contains various tracks I was working on at the time.",
		links: [
			new Link("bandcamp", "https://pibolib.bandcamp.com/album/progress"),
		],
		completionStatus: true,
	},
];

const worksOther = [
	{
		name: "Radiance",
		date: "2023-present",
		description:
			"A Tabletop RPG designed for beginners. Has simplified systems but increases the stakes to encourage players to exit their comfort zones. More information coming soon.",
		links: [],
		completionStatus: false,
	},
	{
		name: "Personal Site",
		date: "2020-present",
		description:
			"My personal portfolio site. Always in development, but always presentable. Built with HTML/CSS/JS without any libraries.",
		links: [new Link("github", "https://github.com/pibolib/personal-site")],
		completionStatus: true,
	},
];

const worksZikuu = [
	{
		name: "Bringers of Light",
		date: "2023",
		description:
			"A team consisting of 時空Δ and Mamoriya, produced BMS for BOF:NT. Did background images, lower level charts, and 1/2 of composition.",
		links: [
			new Link(
				"event",
				"https://manbow.nothing.sh/event/event_teamprofile.cgi?event=142&team=126"
			),
			new Link(
				"youtube",
				"https://www.youtube.com/playlist?list=PLN8RvyXx3vpEZWx17HkNreFA9C9T4oAG-"
			),
			new Link(
				"soundcloud",
				"https://soundcloud.com/torofu/sets/team-bringers-of-light-bof-nt"
			),
		],
		completionStatus: true,
	},
];

const themes = {
	dark: {
		colorTextMain: "#FFFFFF",
		colorTextSub: "#FFFFFF47",
		colorDivBG: "#14141F",
		colorDivTabUnselected: "#181825",
		colorDivTabSelected: "#1E1E2F",
		colorDivSection: "#31314D",
	},
	light: {
		colorTextMain: "#000000",
		colorTextSub: "#00000047",
		colorDivBG: "#D5D4FC",
		colorDivTabUnselected: "#C7C6F2",
		colorDivTabSelected: "#B3B2D8",
		colorDivSection: "#9E9DBF",
	},
};

const worksGamesContainer = createSection("games", worksGames);
const worksMusicContainer = createSection("music", worksMusic);
const worksOtherContainer = createSection("other", worksOther);
const worksZikuuContainer = createSection("zikuu", worksZikuu);
const home = document.getElementById("home");
home.appendChild(worksGamesContainer);
home.appendChild(worksMusicContainer);
home.appendChild(worksOtherContainer);
home.appendChild(worksZikuuContainer);
switchActiveSection("games");
