// @flow
import Base from './base-bot'
import Chat from './chat'
import Team from './team'
import {createStore, reducer, initialState} from './store'

/**
 * A general Keybase bot.
 *
 * @class Bot
 */
class Bot {
  chat: any

  // Create a new store for each bot initialized
  constructor() {
    this.store = createStore(reducer, initialState)
    const base = Base(this.store)
    this.init = base.init
    this.deinit = base.deinit
    this.myInfo = base.myInfo
    this.chat = Chat(this.store)
    // this.team = Team(this.store)
  }
}

export default Bot
