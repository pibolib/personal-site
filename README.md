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
    - [ ] Star particles that become more evident as the user scrolls down the page.
    - [ ] Hanging clocks from the 時空Δ page.
    - [ ] Door that opens when the user mouses over it on the 時空Δ page.
- [ ] Page translation systems
    - [ ] JP translation
- [x] Fancy works display
    - [x] Array parsed into JSON is read to create HTML elements.
        - [x] Sections are created for each year.
        - [x] Works render in the respective section.
        - [x] Each section contains a list of works with classes based on the desired tags.        
    - [x] Works have images.
    - [x] Sort works by tags.
- [ ] RSS feed parser for blog posts (reads off of pibolib's Blogger blog)
    - [x] Figure out and implement https://github.com/sdepold/jquery-rss connected to Blogger rss feed.
    - [ ] Filter posts by tag.
    - [ ] Filter posts by date.
    - [ ] *MAYBE POST-RELEASE: Comments handled through Discord server threads for additional connectivity. Requires discord bot.*

### [Site Design Document](https://www.figma.com/file/jHVir8MYgrJfB8123VqQdz/Personal-Site-Design-v1.6?node-id=0%3A1&t=L1pWkhyKKDyjvGvK-1)