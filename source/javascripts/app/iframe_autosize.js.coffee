resize = (el) ->
  return if el.style.display == 'none'
  w = el.parentNode.clientWidth
  h = el.contentWindow.document.body?.scrollHeight
  return unless h
  el.width  = "#{w}px"
  el.height = "#{h}px"
  console.log 'RESIZED'

$(window).resize ->
  $('iframe[iframe-autosize]').each -> resize(@)

jQuery ($) ->
  $('iframe[iframe-autosize]').each ->
    el = $(@)
    el.hide()
    loading = $('<p>...</p>').insertBefore(el)
    el.load ->
      loading.remove()
      el.show()
      resize(el[0])
      setTimeout((-> resize(el[0])), at) for at in [0, 100, 1000, 3000, 5000, 20000, 30000, 60000]

