'use strict';
var random = require('lodash.random');

module.exports = {
    random: function () {
        return jokes[random(0, jokes.length-1)];
    }
};

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
];
