UUID4 =


  # returns `true` if provided `id` matches UUID4 specification
  validate: (id) ->
    re = ///
      [a-f0-9]{8}-
      [a-f0-9]{4}-
      4[a-f0-9]{3}-
      [89ab][a-f0-9]{3}-
      [a-f0-9]{12}
    ///
    re.test id


  # returns random ID according to UUID4 specification
  generate: ->
    pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    replacements =
      x: '0123456789abcdef'
      y: '89ab'

    # helper function, returns random character from provided list of characters
    getRandomChar = (char_list) ->
      random_position = Math.floor Math.random() * char_list.length
      char_list.charAt random_position

    result = ''
    for char in pattern.split ''
      result +=
        if replacements[char]?
          getRandomChar replacements[char]
        else
          char

    result


# Expose object to the global namespace.
root = if typeof exports is 'object' then exports else this
root.UUID4 = UUID4
