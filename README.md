# Go Baby Go at BU: Website Redesign Concept

We are **PRobono**, a BU student team. We built this web page pro bono for **Go Baby Go at Boston University**, a nonprofit program that builds free, custom ride-on cars for young children with disabilities. Go Baby Go is free to adopt all of the content and code in this repository.

| Team member | Role | Contact |
|---|---|---|
| Yitong Liu | Coding and website development | [rubygo33@bu.edu](mailto:rubygo33@bu.edu) |
| Celine Hong | Content organization and formatting | [celineyh@bu.edu](mailto:celineyh@bu.edu) |

Original site: <https://sites.bu.edu/gobabygo/>

## Meet the GoBuggy

The modified car had no name, so we named it **GoBuggy**. The name echoes *Go* Baby *Go*, and **BU**ggy contains the initials of Boston University.

## Before and after

| Area | Original site | Our suggestion |
|---|---|---|
| Navigation | Search bar only | Sticky menu with *Request a Car* and *Volunteer* buttons |
| First impression | Title, logo, partner list | "What is Go Baby Go?" mission statement beside a photo |
| Partners | Listed as text | BU-red band with the Boston University logo |
| The car | No name | **GoBuggy** |
| Requesting a car | Link only, no eligibility | Eligibility tags, five-step process, linked *Apply* step |
| Photos | Six uncaptioned photos in one grid | Photos placed by section, plus a captioned gallery |
| Impact | Inside a paragraph | Four numbers readable at a glance |
| Donating | General appeal | *"Every $250 helps us build one GoBuggy."* |

## Keeping the brand consistent

- **Colors:** blue `#1898d3`, orange `#fa9a28`, green `#c3d93a`, red `#c81937`, text `#231f20`; BU red `#cc0000` for the BU partnership band.
- **Fonts:** Baloo 2 for headings and Nunito for body text.
- **Donation page (give.bu.edu):** reuse the same header photo, the GoBuggy name, and the $250 pitch.
- **Qualtrics forms:** add the Go Baby Go logo and brand-blue buttons in the survey's Look & Feel settings.
- **Info sheet, emails, social media:** use the same colors, the GoBuggy name, one contact email (gobabygo@bu.edu), and one age range.

## Recommendations

1. **Create a dedicated Donation page** that combines donations with **merchandise fundraising**. Go Baby Go T-shirts already exist; we also suggest **stickers** and **small toy cars**. Merch that uses the BU name or logo may need BU Trademark Licensing approval.
2. **Add a real parent quote** (with permission) to the "Who is this for?" card.
3. **Confirm photo releases** cover public web use.
4. **Align the facts:** the info sheet and the original site list different contact emails and age ranges.

## How to use

- **Preview:** open `index.html` in a browser, or turn on **Settings → Pages** (branch `main`, folder `/root`).
- **Edit:** text and links are in `index.html`; colors are at the top of `css/styles.css`; photos are in `assets/images/`.
- **Adopt on sites.bu.edu:** BU WordPress cannot run these files directly, so rebuild each section as a block using this page as the blueprint.
- **Before launch:** delete the green concept banner at the top of `index.html`.
