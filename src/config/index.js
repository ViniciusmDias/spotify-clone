export const config = {
  spotify: {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: '4ac48558c5d0421da843b642d630f9e1',
    redirectUrl: `https://viniciusdias-spotify.netlify.app/callback`,
    webAPI: 'https://api.spotify.com/v1',
    scopes: [
      'user-read-email',
      'user-read-private',
      'streaming'
    ]
  }
}
