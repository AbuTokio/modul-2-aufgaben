import "../../../style.css"

const album: string[] = ["holidays.jpg", "Restaurant.jpg", "desktop", "rooms.GIF", "DOGATBEACH.jpg"]

// # map

const formattedAlbum: string[] = album.map((value) => {
  if (value.toLowerCase().endsWith(".jpg") || value.toLowerCase().endsWith(".gif")) {
    return value.toLowerCase().slice(0, -4)
  } else {
    return "invalid"
  }
})

console.log(formattedAlbum)

// # forEach

const formattedAlbum2: string[] = []

album.forEach((value) => {
  if (value.toLowerCase().endsWith(".jpg") || value.toLowerCase().endsWith(".gif")) {
    formattedAlbum2.push(value.toLowerCase().slice(0, -4))
  } else {
    formattedAlbum2.push("invalid")
  }
})

console.log(formattedAlbum2)
