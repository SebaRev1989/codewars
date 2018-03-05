function solution(string) {
    function addSpaces(match, offset, string) {
      return (offset > 0 ? ' ' : '') + match;
    }
    return string.replace(/[A-Z]/g, addSpaces);
}