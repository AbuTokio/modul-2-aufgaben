import "../../../style.css"
import { Actor } from "./classes/Actor"
import { Episode } from "./classes/Episode"
import { Series } from "./classes/Series"

const bryanCranston: Actor = new Actor("Bryan", "Cranston", new Date(1956, 2, 7), "Male")
const aaronPaul: Actor = new Actor("Aaron", "Paul", new Date(1979, 7, 27), "Male")
const annaGunn: Actor = new Actor("Anna", "Gunn", new Date(1968, 3, 11), "Female")
const breakingBadActors: Actor[] = [bryanCranston, aaronPaul, annaGunn]

const breakingBadEpisode1: Episode = new Episode(
  "Der Einstieg",
  60,
  "Der Chemielehrer Walter erfährt bei einem Arztbesuch, dass er an Lungenkrebs erkrankt ist und wahrscheinlich nicht mehr lange zu leben hat. Um die finanzielle Sicherheit seiner Familie weiter zu garantieren, beginnt er, mit seinem ehemaligen Schüler Jesse in einem Wohnmobil Methamphetamin herzustellen und damit zu handeln.",
  breakingBadActors
)
const breakingBadEpisode2: Episode = new Episode(
  "Die Katze ist im Sack ...",
  60,
  "Nach dem ersten Versuch eines Drogendeals gibt es Probleme – die Leichen von Krazy-8 und Emilio, die entsorgt werden müssen. Dabei kommt es jedoch zu Komplikationen: Krazy-8 lebt noch. Skyler wird währenddessen misstrauisch und beschattet ihren Mann.",
  breakingBadActors
)
const breakingBadEpisode3: Episode = new Episode(
  "... und der Sack ist im Fluss",
  60,
  "Marie befürchtet, dass Walter jr. Marihuana raucht, und bittet Hank, ihn sich vorzuknöpfen. Jesse soll die Überreste von Emilio entsorgen, und Walter muss Krazy-8 beseitigen. Walter lernt Krazy-8 bei einem Gespräch besser kennen und beschließt, ihn freizulassen, bis er bemerkt, dass er einen Teil eines zerbrochenen Tellers als Waffe versteckt hält. Als er Krazy-8 zur Rede stellt, kommt es zu einer Rangelei, in deren Folge Walter ihn zu Tode würgt.",
  breakingBadActors
)
const breakingBadEpisodes: Episode[] = [breakingBadEpisode1, breakingBadEpisode2, breakingBadEpisode3]

const breakingBad: Series = new Series(
  "Breaking Bad",
  "Die Serie handelt von Walter White, einem an Krebs erkrankten Chemielehrer, der zum Methamphetamin-Koch und Drogenboss wird, um seine Familie finanziell abzusichern.",
  2008,
  2013,
  breakingBadEpisodes
)

const janeKaczmarek: Actor = new Actor("Jane", "Kaczmarek", new Date(1955, 11, 21), "Female")
const frankieMuniz: Actor = new Actor("Frankie", "Muniz", new Date(1985, 11, 5), "Male")

const malcolmInTheMiddleActors: Actor[] = [bryanCranston, janeKaczmarek, frankieMuniz]

const malcolmInTheMiddleEpisode1: Episode = new Episode(
  "Malcolm, der Held",
  20,
  "Auf Anordnung seiner Mutter Lois muss der elfjährige Malcolm sich mit Stevie treffen, einem an den Rollstuhl gefesselten, hoch begabten Schüler. Stevie besucht eine Spezialklasse, in der nur besonders intelligente Kinder unterrichtet werden. Weil die anderen Kinder diese verachten, will auch Malcolm zunächst mit Stevie nichts zu tun haben. Doch es kommt noch schlimmer: Weil auch Malcolm überdurchschnittlich intelligent ist, muss er schon bald die Klasse wechseln - zu Stevie.",
  malcolmInTheMiddleActors
)
const malcolmInTheMiddleEpisode2: Episode = new Episode(
  "Lois sieht rot",
  20,
  "Hal und Lois wollen ihren Hochzeitstag in einem Restaurant feiern. Während Hal dort wartet und einen Martini nach dem anderen zu sich nimmt, versucht Lois herauszubekommen, wer ihr rotes Traumkleid verkokelt hat. Mit immer neuen Strafandrohungen will sie die Jungs zu einem Geständnis bewegen - vergeblich. Schließlich kommt Hal spät nachts nach Hause. Völlig entspannt zündet er sich ein Pfeifchen an. Dabei gerät etwas in Brand, und der Löschversuch verrät den Übeltäter.",
  malcolmInTheMiddleActors
)
const malcolmInTheMiddleEpisode3: Episode = new Episode(
  "Allein zu Haus",
  20,
  "Hal und Lois fahren zu einer Hochzeit bei Hals Verwandten. Die Familienfeier macht beiden keinen Spaß, weil Lois von seiner Familie nicht akzeptiert wird. Schließlich rettet Hal den Tag, indem er Lois eine ganz besondere Liebeserklärung macht - worauf die beiden übereinander herfallen. Außerdem soll der von der Militärakademie beurlaubte Francis auf seine drei kleinen Brüder aufpassen. Malcolm, Reese und Dewey versuchen, sich gut zu benehmen, was den drei Jungs sehr schwer fällt.",
  malcolmInTheMiddleActors
)

const malcolmInTheMiddleEpisodes: Episode[] = [
  malcolmInTheMiddleEpisode1,
  malcolmInTheMiddleEpisode2,
  malcolmInTheMiddleEpisode3,
]

const malcolmInTheMiddle: Series = new Series(
  "Malcolm mittendrin",
  '"Malcolm mittendrin" ist eine US-amerikanische Sitcom über den hochintelligenten Teenager Malcolm, der mit seiner chaotischen, finanziell angeschlagenen Familie in einer Kleinstadt lebt.',
  2000,
  2006,
  malcolmInTheMiddleEpisodes
)

const millieBobby = new Actor("Millie Bobby", "Brown", new Date(2004, 1, 19), "Female")
const finnWolfhard = new Actor("Finn", "Wolfhard", new Date(2002, 11, 23), "Male")
const davidHarbour = new Actor("David", "Harbour", new Date(1975, 3, 10), "Male")

const strangerThingsActors: Actor[] = [millieBobby, finnWolfhard, davidHarbour]

const strangerThingsEpisode1 = new Episode(
  "Chapter One: The Vanishing of Will Byers",
  49,
  "The Vanishing of Will Byers",
  strangerThingsActors
)
const strangerThingsEpisode2 = new Episode(
  "Chapter Two: The Weirdo on Maple Street",
  45,
  "The Weirdo on Maple Street",
  strangerThingsActors
)
const strangerThingsEpisode3 = new Episode("Chapter Three: Holly, Jolly", 42, "Holly,Jolly", strangerThingsActors)

const strnagerThingsEpisodes: Episode[] = [strangerThingsEpisode1, strangerThingsEpisode2, strangerThingsEpisode3]

const strangerThings = new Series(
  "Stranger Things",
  "Kids in the 1980s confront a supernatural mystery tied to a secret lab.",
  2016,
  null,
  strnagerThingsEpisodes
)

function printSeriesInfo(series: Series) {
  console.log(`Title: ${series.title}`)
  console.log(`Description: ${series.description}`)
  console.log(`Start Year: ${series.startYear}`)
  console.log(`End Year: ${series.endYear}`)
  console.log(`Number of Episodes: ${series.episodes.length}`)
  console.log("")
  console.log("Actors:")
  series.episodes[0].actors.forEach((actor) => {
    console.log(`- ${actor.firstName} ${actor.lastName}`)
    console.log(`  - Birthday: ${actor.birthday.toLocaleDateString()}`)
    console.log(`  - Gender: ${actor.gender}`)
  })
}

printSeriesInfo(breakingBad)
console.log("")
printSeriesInfo(malcolmInTheMiddle)
console.log("")
printSeriesInfo(strangerThings)
