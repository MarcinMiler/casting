interface Theme {
    name: string
    colors: {
        [key: string]: string
    }
    fontSize: {
        [key: string]: string
    }
}

export const theme: Theme = {
    name: 'Deafult',
    colors: {
        darkblue: '#21346A',
        lightgray: '#F1F1F6',
        darkgray: '#C9C9C9'
    },
    fontSize: {
        extraSmall: '0.8rem',
        small: '0.85rem',
        base: '1rem',
        medium: '1.25rem',
        mediumLarge: '1.5rem',
        large: '2rem',
        xLarge: '2.5rem',
        extraLarge: '3rem'
    }
}
