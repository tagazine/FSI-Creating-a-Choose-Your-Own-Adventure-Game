
// First Answer 
let firstAnswer = window.prompt('Do you head left or right?');
    if(firstAnswer === 'left'){
        var secondAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?`);
}
    else if(firstAnswer === 'right'){
        var secondAnswer = window.prompt(`You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?`);
}
    else {
        var secondAnswer = window.prompt(`I do not understand.`);
}

// Second Answer
    if(secondAnswer === 'Follow'){
        var thirdAnswer = window.prompt(`You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.`)
}
    else if(secondAnswer === 'Continue'){
        var thirdAnswer = window.prompt(`You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?`)
}
    else if(secondAnswer === 'Past the dragon'){
        var thirdAnswer = window.prompt(`The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:`)
}
    else if(secondAnswer === 'Away from the dragon'){
        var thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?`)
}
    else {
        var thirdAnswer = window.prompt(`I do not understand.`)
}

// Third Answer
    if(thirdAnswer === 'Stay'){
        var fourthAnswer = window.alert(`You live happily amongst the cats for the rest of your days.`)
}
    else if(thirdAnswer === 'Spread the word'){
        var fourthAnswer = window.alert(`After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.`)
}
    else if(thirdAnswer === 'Ladder'){
        var fourthAnswer = window.alert(`After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.`)
}
    else if(thirdAnswer === 'Staircase'){
        var fourthAnswer = window.alert(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
}
    else if(thirdAnswer === 'Stay'){
        var fourthAnswer = window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
}
    else if(thirdAnswer === 'Run'){
        var fourthAnswer = window.alert(`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)
}
    else if(thirdAnswer === 'Draw it'){
        var fourthAnswer = window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.`)
    }
    else if(thirdAnswer === 'Pick it'){
        var fourtAnswer = window.alert(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
    }
    