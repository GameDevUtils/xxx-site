---
layout: page
title: Test
---

<ul>
{% for file in site.pages %}
    {% assign x = file.path | split: "/" %}
    {% assign l = x | last %}
    {% assign f = x | first %}
    {% assign s = x | size %}
    {% if "index.md" == l and "docs" == f and s == 3 %}
        <li>{{ x | join: "?" }} : {{ x | size }} : {{ x[1] }}</li>
    {% endif %}
{% endfor %}
</ul>

GameDevUtils.com is a suite of tools that I developed for my game programming students. There are certainly better products out there, but I wanted my students to have access to free tools and, more importantly, access to the source code for those tools. I also didn’t want the tools to look like poop that was designed in the 80’s.