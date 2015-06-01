'use strict';
var random = require('lodash.random');

var jokes = [
    'Atom walks into a bar. The bartender tells him to split. Everyone dies.'
    ,'A mouse and an elephant are walking across a bridge. The mouse turns to the elephant and says, "We make a lot of noise."'
    ,'A red ball says to a blue ball, "I can bounce higher than you!" The blue ball just sits in silence because it\'s an inanimate object with no mouth.'
    ,'git commit -m "once more with feeling"'
    ,'Man, I spent a long time at The Gym this morning. We\'ve started calling the bathroom "The Gym".'
    ,'I wish I could love unicorns, but love isn\'t real.'
    ,'Got arrested at the airport. Apparently, security doesn\'t appreciate it when you call "shotgun" before boarding a plane.'
    ,'Hammer walks into a bar. Bartender asks him how work went today. "Nailed it!"'
    ,'git commit -m "fix typeo"'
    ,'You know what you get when you cross a rabbit with a rottweiler?\n ⇒ A rottweiler.'
    ,'You know why baby ducks walk so softly?\n ⇒ Because they can\'t walk, hardly.'
    ,'I farted on the elevator. It was wrong on so many levels.'
    ,'What do you call a boat that lies on the bottom of the ocean and quivers?\n ⇒ A nervous wreck.'
    ,'I was going to make a belt out of wrist watches, but then I realized it would be a total waist of time.'
    ,'A doe walks out of the woods, "That\'s the last time I do that for two bucks."'
    ,'I was going to make a belt out of wrist watches, but then I realized it would be a total waist of time.'
    ,'We never knew he was a drunk… until he showed up to work sober.'
    ,'“I’m sorry” and “I apologize” mean the same thing... except when you’re at a funeral.'
    ,'Want to hear a pizza joke? Nah, it’s too cheesy. What about a construction joke? Oh, never mind. I’m still working on that one.'
    ,'I used to think the brain was the most important organ. Then I thought, "Look what’s telling me that!"'
    ,'If I’ve told you once, I’ve told you a million times: Don’t exaggerate!'
    ,'It’s hard to explain puns to kleptomaniacs because they always take things literally.'
    ,'The dyslexic devil worshipper sold his soul to Santa.'
    ,'Why don’t you ever see hippopotamus hiding in trees? Because they’re really good at it.'
    ,'What kind of shoes do ninjas wear? Sneakers.'
    ,'Why does Snoop Dogg carry an umbrella? Fo’ drizzle.'
    ,'Did you hear about the new corduroy pillows? They’re making headlines everywhere!'
    ,'What time is it when you have to go to the dentist? Tooth-hurtie.'
    ,'Did you hear about the Mexican train killer? He had locomotives.'
    ,'How many kids with ADHD does it take to change a light bulb? Let’s go play on our bikes.'
    ,'I wondered why the baseball was getting bigger. Then it hit me.'
    ,'How did the hipster burn his tongue? He drank his coffee before it was cool.'
    ,'PMS should just be called ovary-acting.'
    ,'I started a band called 999 Megabytes — we haven’t gotten a gig yet.'
    ,'What is red and smells like blue paint? Red paint.'
    ,'Why was six afraid of seven? It wasn\'t. Numbers aren\'t sentient and thus incapable of feeling fear.'
    ,'A horse walked into a bar. Several people got up and left as they spotted the potential danger in the situation.'
    ,'What\'s green and has wheels? Grass. I lied about the wheels.'

];

module.exports = {
    random: function () {
        return jokes[random(0, jokes.length-1)];
    }
};