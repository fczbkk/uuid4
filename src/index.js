const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

const replacements = {
  x: '0123456789abcdef',
  y: '89ab'
};

const pattern_re =
  /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/;


function getRandomCharacter (char_list) {
  const random_position = Math.floor(Math.random() * char_list.length);
  return char_list.charAt(random_position);
}


function getPatternCharacter (character) {
  return (character in replacements)
    ? getRandomCharacter(replacements[character])
    : character;
}


/**
 * Checks if provided `id` is valid UUID4.
 * @param {string} id
 * @returns {boolean}
 */
export function validate (id) {
  return pattern_re.test(id);
}


/**
 * Generates new valid UUID4 identifier.
 * @returns {string}
 */
export function generate () {
  return pattern
    .split('')
    .map(getPatternCharacter)
    .join('');
}
