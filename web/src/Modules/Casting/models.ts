export interface Casting {
    id: number
    title: string
    description: string
    city: string
    lat: number
    lng: number
    startDate: string
    duration: string
}

export interface CreateCasting {
    title: string
    description: string
    city: string
    lat: number
    lng: number
    startDate: string
    duration: string
}
