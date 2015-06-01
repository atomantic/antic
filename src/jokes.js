'use strict';
var random = require('lodash.random');

var jokes = [
    // originals by http://twitter.com/antic
    'Atom walks into a bar. The bartender tells him to split. Everyone dies.'
    ,'A red ball says to a blue ball, "I can bounce higher than you!" The blue ball just sits in silence because it’s an inanimate object with no mouth.'
    ,'git commit -m "fix typeo"'
    ,'git commit -m "once more with feeling"'
    ,'git commit -m "synergizing backward overflow for upward mobility"' // thanks to 30 Rock
    ,'Hammer walks into a bar. Bartender asks him how work went today. "Nailed it!"'
    ,'I wish I could love unicorns, but love isn’t real.'

    // found by https://github.com/atomantic
    ,'A mouse and an elephant are walking across a bridge. The mouse turns to the elephant and says, "We make a lot of noise."'
    ,'Man, I spent a long time at the Gym this morning.\n ⇒ We’ve started calling the bathroom "the Gym".'
    ,'Got arrested at the airport. Apparently, security doesn’t appreciate it when you call "shotgun" before boarding a plane.'
    ,'You know what you get when you cross a rabbit with a rottweiler?\n ⇒ A rottweiler.'
    ,'You know why baby ducks walk so softly?\n ⇒ Because they can’t walk, hardly.'
    ,'I farted on the elevator.\n ⇒ It was wrong on so many levels.'
    ,'I was going to make a belt out of wrist watches,\n ⇒ but then I realized it would be a total waist of time.'
    ,'A doe walks out of the woods, "That’s the last time I do that for two bucks."'
    ,'You know why dinosours can’t talk?\n ⇒ because they’re dead.'

    // from https://github.com/guahanweb
    ,'What do you call a boat that lies on the bottom of the ocean and quivers?\n ⇒ A nervous wreck.'

    // from https://github.com/mycargus
    ,'“I’m sorry” and “I apologize” mean the same thing... except when you’re at a funeral.'
    ,'I used to think the brain was the most important organ.\n ⇒  Then I thought, "Look what’s telling me that!"'
    ,'If I’ve told you once, I’ve told you a million times: Don’t exaggerate!'
    ,'It’s hard to explain puns to kleptomaniacs because they always take things literally.'
    ,'Did you hear about the new corduroy pillows?\n ⇒  They’re making headlines everywhere!'
    ,'I wondered why the baseball was getting bigger. Then it hit me.'
    ,'I started a band called 999 Megabytes — we don’t have a gig yet.'
    ,'What is red and smells like blue paint?\n ⇒ Red paint.'
    ,'Why was six afraid of seven? It wasn’t. Numbers aren’t sentient and thus incapable of feeling fear.'
    ,'A horse walked into a bar. Several people got up and left as they spotted the potential danger in the situation.'
    ,'What’s green and has wheels? Grass. I lied about the wheels.'

];

module.exports = {
    random: function () {
        return jokes[random(0, jokes.length - 1)];
    }
};
