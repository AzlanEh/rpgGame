export function moveTowards(person, destionPosition, speed) {
  let distanceToTravelX = destionPosition.x - person.position.x;
  let distanceToTravelY = destionPosition.y - person.position.y;

  let distance = Math.sqrt(distanceToTravelX ** 2 + distanceToTravelY ** 2);

  if (distance <= speed) {
    person.position.x = destionPosition.x;
    person.position.y = destionPosition.y;
  } else {
    let normalizedX = distanceToTravelX / distance;
    let normalizedY = distanceToTravelY / distance;

    person.position.x += normalizedX * speed;
    person.position.y += normalizedY * speed;

    distanceToTravelX = destionPosition.x - person.position.x;
    distanceToTravelY = destionPosition.y - person.position.y;
    distance = Math.sqrt(distanceToTravelX ** 2 + distanceToTravelY ** 2);
  }

  return distance;
}
