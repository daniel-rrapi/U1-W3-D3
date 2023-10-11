window.onload = () => {
    const form = document.getElementById("toDoList")
    
    form.onsubmit = function (e) {
        e.preventDefault();
        const insertThingsInput = document.getElementById("insertThings")
        const insertThings = insertThingsInput.value;
        const div = document.getElementsByTagName("div")[0]
        const list = document.createElement("ul")

        const li = document.createElement("li")
        li.innerText = insertThings
        const button = document.createElement("button") 
        button.innerText = "Cancella attività"

        button.onclick = function (e) {
            const clickedBtn = e.target
            clickedBtn.parentNode.remove()
        }

        list.appendChild(li)
        list.appendChild(button)

        div.appendChild(list)

        insertThingsInput.value = ""

        li.onclick = function (e) {
            const clickedLi = e.target
            clickedLi.className = "clickedLi"
        }
    }
}