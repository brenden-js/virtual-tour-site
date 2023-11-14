
type GuestCreateEvent = {
  name: 'quote/guest.created'
  data: {
    stAddress: string
    email: string
    houseId: string
    name: string
  }
}


type Events = {
  'quote/guest.created': GuestCreateEvent
}