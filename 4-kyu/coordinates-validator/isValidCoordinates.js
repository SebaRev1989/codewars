function isValidCoordinates(coordinates){
  var coord = coordinates.split(",");
  var regexp = RegExp('\\.+.+\\.|[a-z]|[0-9]+-','g');
  if (coord.length === 2) {
    if (regexp.test(coord[0]) || regexp.test(coord[1]))
      return false;
    else {
      var checkLat = parseFloat(coord[0]) >= -90 && parseFloat(coord[0]) <= 90;
      var checkLong = parseFloat(coord[1]) >= -180 && parseFloat(coord[1]) <= 180;
      return checkLat && checkLong;
    }
  }
  else
    return false;
}