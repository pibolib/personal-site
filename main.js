// TODO: write this

class Work {
    constructor(name, date, description, descriptionJP, links, completionStatus) {
        this.name = name; //a string
        this.date = date; //a string
        this.description = description; //a string
        this.descriptionJP = descriptionJP; //a string
        this.links = links; //an array of Link objects
        this.completionStatus = completionStatus; //a boolean
    }
}

class Link {
    constructor(linkType, site) {
        this.linkType = linkType; //a string (see createLinkIcon for valid keys)
        this.site = site; //a string
    }
}

//takes a string, returns none
function switchActiveSection(newSection) {
    
}

//takes a string and a list of Work objects, returns a section container
function createSection(name, contents) {
    const container = document.createElement("div");
    container.id = name;
    container.classList.add("main");
    for(var i = 0; i < contents.length; i++) {
        const workContainer = createWorkContainer(contents[i]);
        container.appendChild(workContainer);
    }
    return container;
}

function createWorkContainer(workJSON) {
    const container = document.createElement("div");
    container.classList.add("work");
    const span1 = createSpan(workJSON.name, "work-title");
    const span2 = createSpan(" ("+workJSON.date+")","work-date");
    const br = document.createElement("br");
    container.appendChild(span1);
    span1.appendChild(span2);
    container.appendChild(br);
    const descriptionDiv = document.createElement("div");
    const description = createSpan(workJSON.description, "en");
    const descriptionJP = createSpan(workJSON.descriptionJP, "jp");
    descriptionDiv.appendChild(description);
    descriptionDiv.appendChild(descriptionJP);
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
function createLinkIcon(link) {

}

function createSpan(text, classes) {
    const span = document.createElement("span");
    const textNode = document.createTextNode(text);
    span.classList.add(classes);
    span.appendChild(textNode);
    return span;
}

const worksGames = [
    {
        name: "???",
        date: "TBD",
        description: "In progress. More information to come soon.",
        descriptionJP: "開発中です。詳しくはまだ決まっていません。",
        links: [],
        completionStatus: false
    },
    {
        name: "TSUNAGARI TOWER: Phoebe's Ascent",
        date: "2022-23",
        description: "A puzzle game developed in Godot 3.5. Solo developed by pibolib, originally for GMTK Game Jam 2022.",
        descriptionJP: "Godot 3.5で開発されたパズルゲームです。自作ゲームです。元GMTK Game Jam 2022のゲームでした。",
        links: [new Link("github","https://github.com/pibolib/tsunagari-tower"), new Link("itchio","https://pibolib.itch.io/tsunagari-tower")],
        completionStatus: true
    },
    {
        name: "Trung Sisters",
        date: "2022",
        description: "A strategy game developed in Godot 3.4. Developed with my brother for Historically Accurate Game Jam 5.",
        descriptionJP:"Godot 3.4で開発されたストラテジーゲームです。Historically Accurate Game Jamのためのゲームです。リードプログラマーでした。",
        links: [new Link("github","https://github.com/pibolib/trung-sisters"), new Link("itchio","https://pibolib.itch.io/trung-sisters")],
        completionStatus: true
    },
    {
        name: "GemStreak: Curse of the Time Machine",
        date: "2021",
        description: "A puzzle game developed in Godot 3.2. Developed with friends for Godot Wild Jam #35.",
        descriptionJP: "Godot 3.2で開発されたパズルゲームです。Godot Wild Jam #35のためのゲームでした。リードデザイナーとリードプログラマーでした。",
        links: [new Link("github","https://github.com/pibolib/gemstreak"), new Link("itchio","https://pibolib.itch.io/gemstreak")],
        completionStatus: true
    }
];

const worksMusic = [
    {
        name: "TSUNAGARI TOWER: Phoebe's Ascent OST",
        date: "2023",
        description: "The full soundtrack of TSUNAGARI TOWER: Phoebe's Ascent.",
        descriptionJP: "TSUNAGARI TOWER: Phoebe's Ascentのサウンドトラックです。",
        links: [new Link("bandcamp","https://pibolib.bandcamp.com/album/tsunagari-tower-phoebes-ascent-ost","youtube","https://www.youtube.com/watch?v=iTYfPnUF-Z4")],
        completionStatus: true
    },
    {
        name: "Trung Sisters OST",
        date: "2022",
        description: "The full soundtrack of Trung Sisters.",
        descriptionJP: "Trung Sistersのサウンドトラックです。",
        links: [new Link("bandcamp","https://pibolib.bandcamp.com/album/trung-sisters-ost")],
        completionStatus: true
    },
    {
        name: "未来よりMESSAGE",
        date: "2021",
        description: "My second album, containing remixes and new tracks.",
        descriptionJP: "第二作のアルバムです。新しい曲とリミックスが入っています。",
        links: [new Link("bandcamp","https://pibolib.bandcamp.com/album/message")],
        completionStatus: true
    },
    {
        name: "GemStreak: Curse of the Time Machine OST",
        date: "2021",
        description: "The full soundtrack of GemStreak: Curse of the Time Machine.",
        descriptionJP: "GemStreak: Curse of the Time Machineのサウンドトラックです。",
        links: [new Link("bandcamp","https://pibolib.bandcamp.com/album/gemstreak-curse-of-the-time-machine-ost")],
        completionStatus: true
    },
    {
        name: "永遠にPROGRESS",
        date: "2021",
        description: "My first album. Contains various tracks I was working on at the time.",
        descriptionJP: "第一作のアルバムです。いろいろな曲が入っています。",
        links: [new Link("bandcamp","https://pibolib.bandcamp.com/album/progress")],
        completionStatus: true
    }
];

const worksOther = [

];

const themes = {
    dark: {
        colorTextMain: "#FFFFFF",
        colorTextSub: "#FFFFFF47",
        colorDivBG: "#14141F",
        colorDivTabUnselected: "#181825",
        colorDivTabSelected: "#1E1E2F",
        colorDivSection: "#31314D"
    },
    light: {
        //tbd
    }
};

const worksGamesContainer = createSection("games", worksGames);
const worksMusicContainer = createSection("music", worksMusic);
const worksOtherContainer = createSection("other", worksOther);
const home = document.getElementById("home");
home.appendChild(worksGamesContainer);
home.appendChild(worksMusicContainer);
home.appendChild(worksOtherContainer);