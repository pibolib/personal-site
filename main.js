// TODO: write this

class Work {
    constructor(name, date, description, links, completionStatus) {
        this.name = name; //a string
        this.date = date; //a string
        this.description = description; //a string
        this.links = links; //an array of Link objects
        this.completionStatus = completionStatus; //a boolean
    }
}

class Link {
    constructor(linkType, URL) {
        this.URL = URL; //a string
        this.linkType = linkType; //a string (see createLinkIcon for valid keys)
    }
}

//takes a string
function switchActiveSection(newSection) {
    
}

//takes a string and a list of Work objects
function createSection(name, contents) {

}

//takes a Link object
function createLinkIcon(link) {

}