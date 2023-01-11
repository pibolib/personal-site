# personal-site
[![Netlify Status](https://api.netlify.com/api/v1/badges/9c273381-87f8-4936-8da0-2e7aef55864f/deploy-status)](https://app.netlify.com/sites/pibosite/deploys)
If this status is deployed, it means that the site is up, currently on new.pibolib.xyz. Will switch to www.pibolib.xyz when the time comes.

This is pibolib's personal site. Based on design v1.6. Site implementation may differ from design.
Built using HTML, CSS, JS, and JQuery, along with moment.js and jquery-rss.

### Libraries
moment.js: https://momentjs.com (used by jquery-rss for now, may replace later)
jquery-rss: https://github.com/sdepold/jquery-rss

### Site Specifications

- [x] Primarily single-page design with scroll snapping
- [x] Responsive design
- [ ] Fancy stuff
    - [ ] #9
    - [ ] #10
    - [ ] #11
    - [ ] #12
- [ ] #13
    - [ ] #14
- [x] Fancy works display
    - [x] Array parsed into JSON is read to create HTML elements.
        - [x] Sections are created for each year.
        - [x] Works render in the respective section.
        - [x] Each section contains a list of works with classes based on the desired tags.        
    - [x] Works have images.
    - [x] Sort works by tags.
- [x] RSS feed parser for blog posts (reads off of pibolib's Blogger blog)
    - [x] Figure out and implement https://github.com/sdepold/jquery-rss connected to Blogger rss feed.
    - [x] Filter posts by tag.
    - [ ] #15
    - [ ] #16
    - [ ] #17


a
### [Site Design Document](https://www.figma.com/file/jHVir8MYgrJfB8123VqQdz/Personal-Site-Design-v1.6?node-id=0%3A1&t=L1pWkhyKKDyjvGvK-1)