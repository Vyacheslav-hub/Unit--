export default function getHealthStatus(character) {
  if (character.health >= 50) {
    return 'green';
  } if (character.health >= 15) {
    return 'yellow';
  }
  return 'red';
}
