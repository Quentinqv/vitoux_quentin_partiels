window.onload = () => {
  const inputName = document.querySelector("#djs_name")
  const formAdd = document.querySelector("#form__dj")
  const djList = document.querySelector(".djs__list")
  const formFilter = document.querySelector("#form__filter")
  const inputFilter = document.querySelector("#filter__dj")
  const resetFilter = document.querySelector("#filter__reset")
  const alphaDj = document.querySelector("#alpha__dj")
  const rdmDj = document.querySelector("#rdm__dj")
  const result = document.querySelector(".result span")

  formAdd.addEventListener("submit", function(e) {
    e.preventDefault()
    let name = inputName.value
    addDj(name)
    printDjs(djList, djs)
  })

  formFilter.addEventListener("submit", function(e) {
    e.preventDefault()
    let filteredDjs = djContains(djs, inputFilter.value)
    filtered = filteredDjs
    printDjs(djList, filteredDjs)
  })

  resetFilter.addEventListener("click", function() {
    filtered = djs
    printDjs(djList, djs)
  })

  alphaDj.addEventListener("click", function() {
    printDjs(djList, sortDjs(djs))
  })

  rdmDj.addEventListener("click", function() {
    let dj
    if (filtered.length == 0) {
      dj = randomDj(djs)
    } else {
      dj = randomDj(filtered)
    }
    result.innerHTML = dj
  })
}

let djs = []
let filtered = []

function addDj(name) {
  djs.push(name)
}

function printDjs(e, list) {
  e.innerHTML = ""
  for (const dj of list) {
    e.innerHTML += `<li>${dj}</li>`
  }
}

function djContains(list, str) {
  let djs = list.filter(dj => dj.includes(str))
  return djs
}

function sortDjs(list) {
  list.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  })

  return list
}

function randomDj(list) {
  if (list.length > 0) {
    let rdm = Math.floor(Math.random() * list.length);
    return list[rdm]
  } else {
    console.error("Aucun DJ n'est renseigné");
    return false
  }
}
