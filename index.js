let events = []
let guests = []
const list = document.querySelector(".list")
const list2 = document.querySelector(".list2")

function render () {
    const html = events.map((event) => {
        return `
        <h4>Event Name: ${event.name}</h4>
        <ul>
            <li>Date: ${event.date} </li>
            <li>Location: ${event.location} </li>
            <li>Description: ${event.description} </li>
        </ul>
        `
    })
    list.innerHTML = html.join(""); 

    // I'm not sure why this isn't appearing in my browser :(
    const html2 = guests.map((guest) => {
        return `
        <h4> ${guest.name} </h4>
        `
    })

    list2.innerhtml = html2.join("")

}


async function fetchEvents() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events");
    const data = await response.json();
    events = data.data
    console.log(events)
    render()
}

async function fetchGuests() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/guests")
    const data = await response.json()
    guests = data.data
    console.log(guests)
    render()
}

fetchEvents()
fetchGuests()