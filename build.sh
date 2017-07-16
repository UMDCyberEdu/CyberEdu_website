#!/bin/bash

#For building the resources page
mustache -p mustaches/navbar.mustache \
-p mustaches/footer.mustache \
-p mustaches/resource_card.mustache \
data/resources.json mustaches/resources_page.mustache > html/resources_page.html
