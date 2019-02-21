import ClipboardJS from 'clipboard'
import tippy from 'tippy.js'

const Clipboard = () => {
  let linkIcon = document.getElementsByClassName('icon-link')
  let url = window.location.href

  if (!linkIcon) return

  let clip = new ClipboardJS(linkIcon, {
    text: function() {
      return url
    }
  })

  clip.on('success', () => {
    console.log('success')
    tippy('.icon-link', {
      arrow: 'true',
      trigger: 'click',
      content: 'Copied!'
    })
  })
}
export default Clipboard
