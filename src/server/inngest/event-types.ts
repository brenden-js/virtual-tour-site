
type GuestCreateEvent = {
  name: 'quote/guest.created'
  data: {
    stAddress: string
    city: string
    phone: string
    email: string
    houseId: string
    name: string
    sqft: number
    region: string
    tourType: string
  }
}


type Events = {
  'quote/guest.created': GuestCreateEvent
}