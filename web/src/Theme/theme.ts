interface Theme {
    name: string
    colors: {
        [key: string]: string
    }
}

export const theme: Theme = {
    name: 'Deafult',
    colors: {
        darkblue: '#21346A',
        lightgray: '#F1F1F6',
        darkgray: '#C9C9C9'
    }
}
