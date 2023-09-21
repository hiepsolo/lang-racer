// Game Status: 0 = 'new', 1 = 'ready', 2 = 'starting', 3 = 'done'
// User Status: 0 = 'joined', 1 = 'done'
type Game = {
  id: string,
  status: number,
  users: {
    [userId: string]: {
      wpms: number,
      status: number
    }
  },
  content: {
    id: string,
    level: string
  }
}