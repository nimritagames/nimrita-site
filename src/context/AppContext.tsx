import React, { createContext, useContext, useReducer } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface AppState {
  isNavOpen: boolean
  emailSubscription: string
  hasJoinedFounders: boolean
  theme: 'dark' | 'light'
  reducedMotion: boolean
}

type AppAction = 
  | { type: 'TOGGLE_NAV' }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'JOIN_FOUNDERS'; payload: boolean }
  | { type: 'SET_THEME'; payload: 'dark' | 'light' }
  | { type: 'SET_REDUCED_MOTION'; payload: boolean }

const initialState: AppState = {
  isNavOpen: false,
  emailSubscription: '',
  hasJoinedFounders: false,
  theme: 'dark',
  reducedMotion: false
}

const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null>(null)

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return { ...state, isNavOpen: !state.isNavOpen }
    case 'SET_EMAIL':
      return { ...state, emailSubscription: action.payload }
    case 'JOIN_FOUNDERS':
      return { ...state, hasJoinedFounders: action.payload }
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    case 'SET_REDUCED_MOTION':
      return { ...state, reducedMotion: action.payload }
    default:
      return state
  }
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [persistedState, setPersistedState] = useLocalStorage('nimrita-app-state', {
    hasJoinedFounders: false,
    theme: 'dark'
  })

  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    hasJoinedFounders: persistedState.hasJoinedFounders,
    theme: persistedState.theme as 'dark' | 'light'
  })

  React.useEffect(() => {
    setPersistedState({
      hasJoinedFounders: state.hasJoinedFounders,
      theme: state.theme
    })
  }, [state.hasJoinedFounders, state.theme, setPersistedState])

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    dispatch({ type: 'SET_REDUCED_MOTION', payload: prefersReducedMotion })
  }, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}