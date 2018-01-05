---
layout: page
title: Test
---
# Index: Test Page

Placeholder ...

<ul>
{% for file in site.pages %}
    {% assign x = file.path | split: "/" %}
    {% assign l = x | last %}
    {% assign f = x | first %}
    {% assign s = x | size %}
    {% if "index.md" == l and "apps" == f and s == 3 %}
        <li>{{ x | join: "?" }} : {{ x | size }} : {{ x[1] }}</li>
    {% endif %}
{% endfor %}
</ul>