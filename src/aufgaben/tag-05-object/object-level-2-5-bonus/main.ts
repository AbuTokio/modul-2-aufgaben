import "./style.css"

type PeriodActiveTwo = {
  start: number
  end: number | string
  extra?: number
}

type SingerTwo = {
  name: string
  country: string
  period_active: PeriodActiveTwo
  genre: string
}

const singersTwo: SingerTwo[] = [
  { name: "The Beatles", country: "United Kingdom", period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
]

function filteredByNameArray(str: string): SingerTwo[] {
  return singersTwo.filter((singer: SingerTwo) => singer.name.toLowerCase().includes(str.toLowerCase()))
}

function createTable(data: SingerTwo[]) {
  const table = document.createElement("table")
  const tbody = document.createElement("tbody")

  const headerRow = document.createElement("tr")
  for (const key in data[0]) {
    const th = document.createElement("th")
    th.textContent = key
    headerRow.appendChild(th)
  }
  tbody.appendChild(headerRow)

  data.forEach((obj) => {
    const row = document.createElement("tr")
    const td = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")

    td.textContent = obj.name
    td2.textContent = obj.country
    td3.textContent = `${obj.period_active.start} - ${obj.period_active.end}`
    td4.textContent = obj.genre
    row.appendChild(td)
    row.appendChild(td2)
    row.appendChild(td3)
    row.appendChild(td4)
    tbody.appendChild(row)
  })

  table.appendChild(tbody)

  const tableContainer = document.querySelector<HTMLDivElement>("#table-container")

  if (tableContainer) {
    while (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild)
    }
    tableContainer.appendChild(table)
  }
}

const searchButton = document.querySelector<HTMLButtonElement>("#search-button")

searchButton?.addEventListener("click", () => {
  const searchInputValue = document.querySelector<HTMLInputElement>("#searchInput")?.value
  if (searchInputValue) {
    createTable(filteredByNameArray(searchInputValue))
  } else {
    createTable(filteredByNameArray(""))
  }
})

createTable(filteredByNameArray(""))
