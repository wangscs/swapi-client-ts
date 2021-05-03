# Star Wars Galaxy 

SWAPI is an open Star Wars API that you'll use to build a fan app. 
* [Star Wars API](https://swapi.dev/documentation)

## Instructions

1. Fork this repository.
1. Share your fork with your team. 
1. Submit pull requests (PR) when you're done with a task.
1. Review a PR before you start the next task.
1. Repeat.

The goal is to practice the development cycle: collaborate, plan, develop and review. Instructors will review and merge all PRs throughout the day, providing feedback on your code. If you need help with your code, use the PR process to discuss it with the team or swarm the problem together. 

Your team should manage your own planning and create your own tasks. You can meet at any time in any available room. 

## Stories and AC 

Remember: your team should break down each story and/or criteria into discreet tasks. Then you can share those tasks to get the work done. 

**People, Starships and Vehicles**

As a user, I can browse the characters of the Star Wars universe so that I can nerd out about them. 

```gherkin
Given I'm viewing the homepage
When I navigate to characters 
Then I can view them all 

Given I'm viewing all characters 
When I select a character 
Then I can view a page with all of their details

Given I'm viewing a character 
When I hover over their image 
Then I can hear them say "hello"!

Given I enter a search query for characters
When I submit the form 
Then I can view the search results 
```

**Species and Planets**

As a user, I can browse the planets of the Star Wars universe so that I can nerd out about them. 

```gherkin
Given I'm viewing the homepage
When I navigate to planets 
Then I can view them all 

Given I'm viewing all planets 
When I select a planet 
Then I can view a page with all of their details

Given I'm viewing a planet 
When I hover over their image 
Then I can hear a a bubble "pop"

Given I enter a search query for planets  
When I submit the form 
Then I can view the search results 
```
