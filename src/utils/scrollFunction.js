export default function scrollFunction({setScroll}) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setScroll(true)
    } else {
        setScroll(false)
    }
  }
