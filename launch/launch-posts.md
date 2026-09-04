# bookapp launch — communities and ready-to-post text

Researched 2026-09-04. Reddit itself is not reachable by this session's fetch
tool — every `reddit.com`/`old.reddit.com`/`redlib` request returned a hard
block or HTTP 403 (bot protection), even for the read-only `about/rules.json`
endpoint, with a plain curl + browser User-Agent. So for every Reddit
community below, **the rule characterization is informed general knowledge
of that subreddit's long-standing, well-documented norms — not a verified
live quote.** Before posting anywhere on Reddit, open the sub on your own
logged-in browser and re-read the current sidebar/About → Rules tab; subreddit
rules and mod teams change. Where I *could* fetch the actual source (Hacker
News guidelines, the awesome-selfhosted contributing doc), the quotes below
are verbatim and linked.

Post everything from Andrej's own accounts, in first person, spaced out
(not all on the same day), and read each community's last ~20 posts first
to match its actual tone before pasting anything.

---

## 1. r/bookshelf

**URL:** https://www.reddit.com/r/bookshelf/
**What it is:** photo-only community for showing off bookshelves — aesthetics,
not software.
**Self-promo:** not fetchable live. By format, this sub is almost entirely
image posts of shelves; a text/link post about an app (even a free one) sits
outside what the community actually does, self-promo rule or not.
**Recommendation: SKIP** as a launch post. The only fit would be posting a
real photo of your own shelf *with* the bookapp screenshot as a comparison,
framed as "I modeled this shelf to the millimetre" — and even then, check
the sub's current photo-only enforcement before trying it. Not worth the
launch-day slot; revisit later with a genuinely striking photo, not now.

---

## 2. r/libraries

**Recommendation: SKIP** (per your own call). This sub is library-*profession*
discussion — public/academic library staff, cataloging standards, patron
services — not home-library hobbyists. bookapp is off-topic there regardless
of self-promo rules.

---

## 3. r/homelibrary

**URL:** https://www.reddit.com/r/homelibrary/
**What it is:** home-library setups, shelf photos, organization questions —
a mid-size, hobbyist, generally friendly community.
**Self-promo:** not fetchable live. This sub's long-standing norm (as with
most hobby subs this size) tolerates a tool mention when it's framed as
"I built this for my own library, sharing in case it's useful" with real
screenshots, rather than a bare download link. It's not a strict no-self-promo
sub the way r/books is, but low-effort promo posts still get removed by
mods or downvoted by the community — lead with substance.
**Recommendation: POST.** Check the current sidebar for a fixed
self-promotion day/megathread before submitting standalone.

**Ready text (EN, first person):**

> Title: I got tired of guessing whether a book would fit, so I modeled my
> shelves in real millimetres
>
> I have a home library that outgrew "just eyeball it," so over the last
> while I built an app that models shelves, cabinets and drawers at their
> true millimetre size, and books the same way — spine out, flat, cover
> forward, or turned into depth. Once both sides are modeled in real
> dimensions, it can tell me whether a book actually fits on a given shelf
> and exactly where, before I buy the book or a new bookcase.
>
> You scan the ISBN and it pulls title/author/cover; it works offline, with
> no account, and a phone and a Windows PC can sync directly over local
> Wi-Fi (no cloud, no server).
>
> Being upfront about what it doesn't do: it can't measure a book's
> thickness automatically from a photo. I tried, seriously, more than once,
> and it wasn't reliable enough to trust, so it isn't in there — you either
> measure a book once with a ruler or pick its format and the app marks
> that as approximate.
>
> It's a free public beta for Android and Windows right now (no iPhone yet,
> not on Google Play/Microsoft Store yet). Link: https://arling.sk/bookapp/ —
> genuinely want to know what breaks or what's missing for your kind of
> shelf. Happy to answer anything about how it works.

---

## 4. r/books

**URL:** https://www.reddit.com/r/books/
**Self-promo:** not fetchable live, but r/books' blanket restriction on
self-promotion (personal blogs, apps, kickstarters, "check out my project")
is one of the most consistently and widely documented rules among large
book subreddits — it comes up in essentially every "how not to get banned
promoting on Reddit" guide as the go-to example of a strict sub. Given the
size and strictness, treat that as reliable even without a fetched quote.
**Recommendation: SKIP** as a submission — very likely auto-removed or
mod-removed regardless of how it's worded. The only defensible use of this
sub is replying, as a disclosed developer, to an *existing* thread where
someone is already asking for a library-organization/cataloging app — never
a top-level post.

---

## 5. r/selfhosted

**URL:** https://www.reddit.com/r/selfhosted/ (~830K+ members)
**Self-promo:** not fetchable live. The well-known, widely-cited norm here
is that self-promotion is accepted when it leads with genuine value and the
tool fits the sub's actual ethos (local control, no cloud dependency,
no forced accounts) — and gets removed fast when it reads as an ad.
**Important fit caveat:** bookapp is not literally "self-hosted" — there's
no server to run. It's local-first with direct phone↔PC sync over LAN. Some
of this sub's stricter readers care about that distinction (they want an
actual hostable service, not just "an app that avoids the cloud"). Framing
this honestly up front avoids the "this isn't self-hosted" pushback in
comments.
**Recommendation: POST, with the caveat stated in the post itself.**

**Ready text (EN, first person):**

> Title: Not self-hosted exactly, but no-cloud/no-account/LAN-sync — built a
> home library app that models shelves in real millimetres
>
> Flagging up front: this isn't self-hosted software in the literal sense —
> there's no server to run. But it's built the way I'd want a self-hosted
> tool to behave: no account, no cloud, all data local to the device, and
> when I want a phone and a Windows PC to share the same library, they talk
> directly to each other over local Wi-Fi — nothing goes through a server
> I don't control (there isn't one).
>
> What it actually does: models bookshelves, cabinets and drawers at their
> real millimetre dimensions, and books the same way, so it can tell me
> whether a specific book fits a specific shelf before I buy it or a new
> bookcase. ISBN scanning fills in title/author/cover.
>
> What it doesn't do, said plainly: no automatic thickness measurement from
> a photo — tried it, wasn't reliable, cut it rather than fake it. You
> measure once with a ruler or pick a format and it's marked approximate.
> No iPhone yet, no app-store listing yet — this is a direct-download
> public beta for Android and Windows.
>
> Free, no ads, no telemetry beyond anonymous page-view counts on the
> landing page itself (not the app). https://arling.sk/bookapp/ — feedback
> welcome, especially "this isn't what I'd call self-hosted" pushback, that's
> fair and I'd rather hear it than pretend otherwise.

---

## 6. LibraryThing — "Librarians who LibraryThing" group

**URL:** https://www.librarything.com/groups/78 (group), existing relevant
thread: https://www.librarything.com/topic/194744 — *"Software Programs for
Cataloging a Collection to High Levels of Detail"*
Direct page fetch was blocked (403) but the thread's existence and subject
were confirmed via search: it's an active discussion where members
recommend specific cataloging software (BookCat, Citavi came up). This is
about as direct a product-market match as launch research turns up — the
exact people asking "what software should I use to catalog my collection in
detail" are the audience.
**Self-promo:** LibraryThing forums generally tolerate a relevant, honest
software mention inside an on-topic thread far better than a cold top-level
ad — but re-read the thread's own recent tone before posting, and disclose
that you built it.
**Recommendation: POST** — reply into that existing thread rather than
starting a new one, since it's already the exact question.

**Ready text (EN, first person, as a reply):**

> Late addition to this thread, but since it's exactly the question: I've
> been building bookapp, which goes a step further than most cataloging
> software — it models shelves, cabinets and drawers at their real
> millimetre dimensions too, not just the book records, so it can tell you
> whether a book fits a specific shelf and where. ISBN scan fills in
> title/author/cover; offline, no account, phone-to-PC sync over local
> Wi-Fi. Free public beta for Android and Windows right now (Windows if
> you want the "high level of detail" cataloging angle from the OP's
> question, since a laptop keyboard makes bulk entry much faster than a
> phone). Doesn't do automatic photo-based measurement — tried it, wasn't
> reliable, so it's not in there. https://arling.sk/bookapp/ if useful,
> and I'd genuinely like to know if it handles a serious collection the
> way you'd want.

**Goodreads groups:** searched for an equivalent "recommend cataloging
software" group or thread and didn't find a live, rules-documented one —
Goodreads' discussion groups skew toward book content/author self-promotion
threads, not software recommendations, and most restrict promotional posts
to threads explicitly tagged for it (usually reserved for authors promoting
their own books, not tools). **Recommendation: SKIP** — LibraryThing is the
better-targeted, better-evidenced use of the same effort.

---

## 7. Hacker News — Show HN

**URL:** https://news.ycombinator.com/ (submit, title prefixed `Show HN:`)
**Guidelines — verbatim, from https://news.ycombinator.com/newsguidelines.html:**
> "It's ok to post your own stuff part of the time, but the primary use of
> the site should be for curiosity." … "Please don't do things to make
> titles stand out, like using uppercase or exclamation points."

Additional, widely-documented Show HN norms: it has to be something people
can actually try (not a landing page or waitlist), don't ask friends to
vote/comment, don't put the pitch in the title, don't repost after a weak
showing.
**Fit:** good — bookapp is a real, personally-built, downloadable thing;
Show HN explicitly favors exactly this shape of submission.
**Recommendation: POST.** Submit from Andrej's own HN account; be present
in the comments for the first few hours to answer technical questions
(Flutter, ISBN lookup sources, the LAN sync protocol, and — likely the
first question — why it doesn't measure books from a photo).

**Ready text (EN, first person):**

> Title: Show HN: bookapp – a home library modeled to the millimetre
> (Android/Windows, free beta)
>
> I built bookapp because I wanted to know, before buying a book, whether
> it would actually fit on a specific shelf — and if so, where. It models
> shelves, cabinets and drawers at their true millimetre dimensions
> (doors and drawers included), and books the same way: spine out, flat,
> cover forward, or turned into depth. Scanning a book's ISBN fills in
> title, author and cover; from there it's a filterable catalog, loan
> tracking, page-based reading progress, ratings, MARC21 export/import,
> and Goodreads/StoryGraph import. A phone and a Windows PC can sync a
> library directly over local Wi-Fi — no server, no account, works offline.
>
> The part I'd rather say up front than have someone find out later:
> it does not measure book thickness automatically from a photo. I tried
> several approaches (including OpenCV-based edge detection) against real
> shelf photos and none were reliable enough to trust — neighbouring books
> of the same colour, printed text stronger than the physical edge between
> spines, tilted spines. So the app either has you measure a book once
> with a ruler (after which it remembers it, and can back-calculate other
> thicknesses on a tightly packed shelf), or estimates from the book's
> format and marks that "approximately" until corrected.
>
> It's a free public beta right now for Android (signed APK, direct
> download) and Windows (zip, no installer) — not on Google Play or the
> Microsoft Store yet, and no iPhone build. Built in Flutter.
>
> Landing page: https://arling.sk/bookapp/
> Downloads: https://github.com/AndryRoby/bookapp/releases/latest
>
> Happy to answer anything — architecture, the ISBN lookup sources, the
> sync protocol, or why the auto-measurement idea didn't survive testing.

---

## 8. Modrý koník

**Recommendation: SKIP** (per your own call). Modrý koník is a general
Slovak parenting/lifestyle forum, not a book or software community —
off-topic for a library app launch either way.

---

## 9. r/Slovakia

**URL:** https://www.reddit.com/r/Slovakia/
**Self-promo:** not fetchable live. National general-interest subreddits at
this scale (r/Slovakia included, by long-standing reputation) commonly
restrict outright product/advertising posts, often requiring modmail
permission first or confining self-promotion to a fixed weekly thread —
this is the standard pattern across most national subs of comparable size,
not something specific I could confirm in r/Slovakia's current wording.
**Recommendation: CAUTION — message the mods first**, rather than posting
cold. If they say yes or point you to a self-promo thread, use the text
below; if there's no reply or the answer is no, skip it rather than risk
a ban that would burn the account for later ARLing tools too.

**Modmail text (SK, first person):**

> Ahoj, som Andrej z Bratislavy, jednočlenná firma (ARLing s. r. o.).
> Postavil som appku bookapp — digitálne dvojča domácej knižnice
> v milimetroch (police, skrinky, zásuvky aj knihy v reálnych rozmeroch,
> takže appka vie povedať, či sa kniha zmestí a kam presne patrí). Je to
> bezplatná verejná beta pre Android a Windows, bez účtu, bez cloudu.
> Chcel by som o nej napísať krátky post — je to v poriadku, alebo máte na
> to vyhradené vlákno/deň? Vopred ďakujem, rešpektujem, ak je odpoveď nie.

**Ready post text (SK, first person — use only if mods confirm it's OK):**

> Nadpis: Postavil som appku, ktorá modeluje domácu knižnicu v milimetroch
>
> Ahojte, som z Bratislavy a posledné obdobie som robil appku bookapp —
> vaše police, skrinky a zásuvky sa v nej nakreslia presne v reálnych
> rozmeroch, knihy tiež, a appka potom vie povedať, či sa vám konkrétna
> kniha zmestí na konkrétnu policu a presne kam patrí — ešte predtým, než
> ju alebo novú skrinku kúpite. Naskenujete ISBN a appka si sama nájde
> názov, autora aj obálku; funguje offline, bez účtu, telefón a Windows PC
> si vedia knižnicu synchronizovať priamo cez domácu Wi-Fi.
>
> Poviem rovno aj to, čo appka nevie: automaticky odmerať hrúbku knihy
> z fotky. Skúšal som to poctivo, viackrát, a nebolo to dosť spoľahlivé,
> tak to netvrdím. Rozmer sa buď raz zmeria metrom, alebo sa vyberie formát
> knihy a appka ho označí ako približný.
>
> Je to bezplatná verejná beta pre Android a Windows (zatiaľ nie je na
> iPhone, zatiaľ nie je v Google Play ani Microsoft Store).
> https://arling.sk/bookapp/ — budem rád za akúkoľvek spätnú väzbu, hlavne
> čo appke chýba pre vašu knižnicu.

---

## 10. Facebook skupiny knihomoľov

Facebook groups aren't reachable by this session's tools at all (login-walled,
JS-rendered) — I could not verify any specific group's existence, current
membership, or posting rules live. Search turned up book-related Facebook
*pages* (Knihomilové, Knihomol, Spolok slovenských knihovníkov a knižníc)
but pages aren't groups and I have no verified group name or rule set to
cite. **This section is text only, as requested** — search Facebook Groups
yourself for terms like "knihomoľ", "milovníci kníh", "čo čítate", "domáca
knižnica" and check each group's own pinned rules before posting; many
require admin approval to join and/or ban outside links entirely.

**Ready text (SK, first person):**

> Ahojte, chcem sa podeliť o appku, ktorú som postavil — bookapp modeluje
> domácu knižnicu v reálnych milimetroch: police, skrinky, zásuvky aj
> knihy, takže vopred viete, či sa vám kniha na konkrétnu policu zmestí
> a presne kam patrí. Stačí naskenovať čiarový kód ISBN a appka si sama
> dotiahne názov, autora aj obálku. Funguje offline, bez účtu a bez cloudu;
> telefón a počítač s Windows si vedia knižnicu synchronizovať priamo cez
> domácu Wi-Fi.
>
> Úprimne aj o tom, čo appka (zatiaľ) nevie: automaticky odmerať hrúbku
> knihy z fotky police. Skúšal som to poctivo a nebolo to spoľahlivé, tak
> to appka netvrdí — rozmer sa buď raz zmeria metrom, alebo sa vyberie
> formát knihy a appka ho označí ako približný.
>
> Je to bezplatná verejná beta pre Android a Windows (na iPhone zatiaľ
> nie je, v obchodoch s appkami tiež zatiaľ nie). Odkaz:
> https://arling.sk/bookapp/ — každá spätná väzba pomôže, hlavne čo by ste
> na svojej knižnici potrebovali inak.

---

## 11. GitHub "awesome lists" — awesome-selfhosted

**URL:** https://github.com/awesome-selfhosted/awesome-selfhosted-data
(contributing guide checked directly)
**Verbatim from CONTRIBUTING.md:**
> "Any software project you are adding was first released more than 4
> months ago." … descriptions should not restate "open-source," "free," or
> "self-hosted" since inclusion already implies them (i.e., the list is
> FOSS-only) … entries must be a self-hostable network service, not "a
> desktop/mobile/CLI app requiring separate server software," and not "a
> platform for deploying arbitrary applications."

**Recommendation: SKIP — fails at least three explicit, checkable
criteria:**
1. bookapp is closed source (no FOSS license) — this list is FOSS-only.
2. bookapp is a mobile/desktop app with peer-to-peer LAN sync, not a
   self-hosted network *service* — it doesn't fit the list's actual
   category regardless of license.
3. It launched today; the list requires the first release to be more
   than 4 months old.

Not worth pursuing unless bookapp goes open source and the "self-hosted
service" framing changes — and even then, #2 would likely still be a
mismatch. Time is better spent on r/selfhosted (§5) or LibraryThing (§6),
which are actual fits.

---

## Suggested order

1. **Hacker News Show HN** and **LibraryThing reply** first — best-evidenced
   fits, lowest promotional-tone risk.
2. **r/homelibrary** and **r/selfhosted** a day or two later (space them out;
   don't cross-post the same text same-day, it reads as spam even when each
   sub individually would have allowed it).
3. **r/Slovakia** only after modmail approval.
4. **Facebook groups** whenever you've found and vetted a specific one.
5. Skip r/bookshelf, r/libraries, r/books, Modrý koník, and
   awesome-selfhosted for this launch — reasons above.
