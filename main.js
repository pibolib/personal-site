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

}

//takes a Link object, returns a link container containing an image with an a attached
function createLinkIcon(link) {

}

const worksGames = [
    Work("???","TBD","More information to come soon...","...?",[],false),
    Work("TSUNAGARI TOWER: Phoebe's Ascent","2022","A puzzle game developed in Godot 3.5. Solo developed by pibolib, originally for GMTK Game Jam 2022.","Godot 3.5で開発されたパズルゲームです。自作ゲームです。元GMTK Game Jam 2022のゲームでした。",[Link("github","https://github.com/pibolib/tsunagari-tower"),Link("itchio","https://pibolib.itch.io/tsunagari-tower")], true),
    Work("Trung Sisters","2022","A strategy game developed in Godot 3.4. Developed with my brother for Historically Accurate Game Jam 5.","Godot 3.4で開発されたストラテジーゲームです。Historically Accurate Game Jamのためのゲームです。リードプログラマーの役割でした。",[Link("github","https://github.com/pibolib/trung-sisters"),Link("itchio","https://pibolib.itch.io/trung-sisters")], true),
    Work("GemStreak: Curse of the Time Machine","2021","A puzzle game developed in Godot 3.2. Developed with friends for Godot Wild Jam #35.","Godot 3.2で開発されたパズルゲームです。Godot Wild Jam #35のためのゲームでした。リードデザイナーとリードプログラマーの役割でした。",[Link("github","https://github.com/pibolib/gemstreak"),Link("itchio","https://pibolib.itch.io/gemstreak")], true),
];

const worksMusic = [

];

const worksOther = [

];