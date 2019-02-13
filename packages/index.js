import Card from './card'
import Avatar from './avatar'
import Badge from './badge'
import Button from './button'
import Note from './note'


export default {
  install: vue => {
    Card.install(vue)
    Avatar.install(vue)
    Badge.install(vue)
    Button.install(vue)
    Note.install(vue)
  },
}
