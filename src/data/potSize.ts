export const POT_Size_KEYS=[ '2ltr', '3ltr','2ltr D','3ltr D'] as const
export const TROLLY_POT_SIZE_KEYS=['1ltr',...POT_Size_KEYS] as const
export const TRAILER_POT_SIZE_KEYS=POT_Size_KEYS
export const CRATE_POT_Size_KEYS=[ '2ltr D', '3ltr D'] as const
export const POT_Size_Map={
    '1ltr': 50,
    '2ltr':30,
    '3ltr': 21,
    '2ltr D': 32
} as const

export const TROLY_POT_Size_Map={
    '1ltr': 50,
    '2ltr':30,
    '3ltr': 21,
    '2ltr D': 32,
    '3ltr D': 28
} as const

export const TRAILER_BARKE_POT_Size_Map={
    '2ltr':9,
    '3ltr':8,
    '2ltr D': 12,
    '3ltr D': 11
} as const

export const TRAILER_TOPPER_POT_Size_Map={
    '2ltr':8,
    '3ltr': 6,
    '2ltr D':11,
    '3ltr D': 9
} as const

export const CRATE_POT_Size_Map={
    '2ltr D':56,
    '3ltr D':49
}
