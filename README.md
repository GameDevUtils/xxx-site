# Project: `site/`

This project contains the landing page, navigation, documentation, blog, and standard look-and-feel for the apps in the http://gamedevutils.com/ suite of tools.

## The Need

Blah. Landing page. for gamedev tools.

## The Tech, the Build, the Result

The `site\` project is written in vanilla HTML, CSS, JavaScript, [Liquid](https://github.com/Shopify/liquid/wiki/liquid-for-designers), and [GitHub-flavored markdown](https://help.github.com/categories/writing-on-github/). [Jekyll v3.6.x](https://jekyllrb.com/) is used to render the static pages, which are then hosted on [GitHub Pages](https://pages.github.com/). The design is based on the [Bootstrap v3.3.x](https://getbootstrap.com/docs/3.3/) and uses the [United](https://bootswatch.com/3/united/) theme from [Bootswatch v3.3.x](https://bootswatch.com/3/).

For the most part, all of this should be transparent to you. You can just edit the markdown, push your changes, then revel and profit.

## The Automated Tests

Yes, the result of the `site\` project build and deploy is just a static blog. I want to catch some of the more-common, fat-fingered errors before I publish to the internets and embarrass myself further. The content is embarrassing enough, thank you very much.

So, what do the tests look for?

* **Valid Markdown:** Markdown
* **Valid HTML:** 
* **Valid CSS:**
* **Valid JS/JSX:**
* **Valid Liquid:**

## HTML-PROOFER

https://jekyllrb.com/docs/continuous-integration/circleci/#html-proofer

## CircleCI

https://circleci.com/docs/2.0/local-jobs/

