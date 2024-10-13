// frontend/entrypoints/twindSetup.js
import { create, cssomSheet } from 'twind'

let twindInstance = null

export function setupTwind() {
    if (twindInstance) {
        return twindInstance
    }

    // Create a CSSOM sheet to manage styles
    const sheet = cssomSheet({ target: new CSSStyleSheet() })

    // Initialize Twind with the custom theme
    const { tw } = create({
        theme: {
            extend: {
                colors: {
                    primary: {
                        0: '#ffb5b5', // lightest
                        25: '#fc7b7b', // lighter
                        50: 'red',   // Regular red
                        75: '#c10000',
                        100: '#690000', // Darkest
                    },
                },
            },
        },
        sheet, // Apply the CSSOM sheet
    })

    twindInstance = { tw, sheet }
    return twindInstance
}
