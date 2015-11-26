
# Pixlegram - Your Friendly Instagram Searcher

[Live link](http://pixlegram.herokuapp.com)

## Description

A basic web application using Instagram's API allowing users to search through media with a *hashtag* of their choice! You can look at all the cuddly dogs or even adorable kittens! It shows images and even plays videos right on the page!

## Instructions

Simply type in the *hashtag* you want to search for, provide the date range you want to search through (these are optional, otherwise it's just the most recent media), and hit search! That was easy wasn't it? If you want to clear out your results, just hit the red button in the middle.

## Technologies

* Ruby on Rails (including various gem/libraries)
* Instagram API
* React.js/Flux (funny how they're both Facebook things)
* Sorry in advance if that wasn't funny.

## Features

* Queries Instagram's API with a tag and optional date ranges
* API accepting a POST request for query options and GET to retrieve content
* Basic user-friendly UI to interact with web application
* Image data stored in a permanent Postgresql server
* Minimizes API usage by storing images within the same search session on client side during pagination (similar to Backbone.js' collection object)
  * Front end: Navigate via pagination without hitting API unless you need new pictures
  * Back end: Minimizes hitting Instagram API to avoid rate limit on token and date ranges into the future default to most recent media
