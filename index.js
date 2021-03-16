/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
// debugger
header.style.color = "green"



/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const travelerName = document.querySelector('h2')
const travelerNickname = document.querySelector('em')
const travelerPhoto = document.querySelector('img')

travelerName.textcontent = traveler.name
travelerNickname.textcontent = traveler.nickname
travelerPhoto.src = traveler.photo

/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function(object){
    const outerDiv = document.createElement('li')

    outerDiv.innerHTML = `
    <li data-id="${object.id}">
    <p>"${object.description}"</p>
    <img src="${object.photo}" alt="${object.species}"/>
    <a href="${object.link}" target="_blank">"Here's a video about the ${object.species} species!"</a>
    </li>`

    const collection = document.querySelector('#animals')
    collection.append(outerDiv)

})

/***** Deliverable 5 *****/

 document.querySelector('[data-id="3"]').remove()