# personal-site

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
- [ ] RSS feed parser for blog posts (reads off of pibolib's Blogger blog)
    - [x] Figure out and implement https://github.com/sdepold/jquery-rss connected to Blogger rss feed.
    - [ ] MAYBE: Comments handled through Discord server threads for additional connectivity. Requires discord bot.
    - [ ] Sort blog posts by title categories.
- [x] Fancy works display
    - [x] Array parsed into JSON is read to create HTML elements.
        - [x] Sections are created for each year.
        - [x] Works render in the respective section.
        - [x] Each section contains a list of works with classes based on the desired tags.        
    - [x] Works have images.
    - [x] Sort works by tags.
- [ ] Page translation systems
- [ ] ~~Page title updates as user moves up/down the page~~
- [ ] Adjust `<a>` tags to point to actual links

### [Site Design Document](https://www.figma.com/file/jHVir8MYgrJfB8123VqQdz/Personal-Site-Design-v1.6?node-id=0%3A1&t=L1pWkhyKKDyjvGvK-1)