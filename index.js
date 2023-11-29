let events = []
const list = document.querySelector(".list")

function render () {
    const html = events.map((event) => {
        return `
        <h4>Event Name: ${event.name}</h4>
        <ul>
            <li>Date:${event.date} </li>
            <li>Location:${event.location} </li>
            <li>Description:${event.description} </li>
        </ul>
        `
    })
    list.innerHTML = html.join("")

}

async function fetchEvents() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events");
    const data = await response.json();
    events = data.data
    console.log(events)
    render()
}

fetchEvents()
