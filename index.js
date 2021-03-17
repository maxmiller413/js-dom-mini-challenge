/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
// debugger
header.style.color = "green"



/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

// const hTravelerName = document.querySelector('h2')
// const emTravelerNickname = document.querySelector('em')
// const imgTravelerPhoto = document.querySelector('img')

// hTravelerName.textcontent = traveler.name
// emTravelerNickname.textcontent = traveler.nickname
// imgTravelerPhoto.src = traveler.photo
// imgTravelerPhoto.alt = traveler.title

const profile = document.querySelector('div#profile')
const imgTravelerPhoto = profile.querySelector('img')
    imgTravelerPhoto.src = traveler.photo
    imgTravelerPhoto.alt = traveler.name

const h2TravelerName = profile.querySelector('h2')
    h2TravelerName.textContent = traveler.name

const emTravelerNickname = profile.querySelector('em')
    emTravelerNickname.textContent = traveler.nickname

// console.log(imgTravelerPhoto)
// console.log(h2TravelerName)
// console.log(emTravelerNickname)

/***** Deliverable 4 *****/

const ul = document.querySelector('ul#animals')

traveler.animalSightings.forEach(function (animalSighting){

    const li = document.createElement('li')
    li.dataset.id = animalSighting.id

    li.innerHTML = `<p>${animalSighting.description}</p>
        <img src="${animalSighting.photo}" alt="${animalSighting.species}"/>
        <a href="${animalSighting.link}" target="_blank">Here's a video about the ${animalSighting.species}!</a>`

    // console.log(li)
    
    ul.append(li)

})
 
// traveler.animalSightings.forEach(function(object){
//     const outerDiv = document.createElement('li')

//     outerDiv.innerHTML = `
//     <li data-id="${object.id}">
//     <p>"${object.description}"</p>
//     <img src="${object.photo}" alt="${object.species}"/>
//     <a href="${object.link}" target="_blank">"Here's a video about the ${object.species} species!"</a>
//     </li>`

//     const collection = document.querySelector('#animals')
//     collection.append(outerDiv)

// })

/***** Deliverable 5 *****/

const dataId = document.querySelector("[data-id='3']")
dataId.remove()
// console.log(dataId)

//  document.querySelector('[data-id="3"]').remove()