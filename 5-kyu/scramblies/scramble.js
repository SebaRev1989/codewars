function scramble(str1, str2) {
    var str1 = str1.split("").sort();
    var str2 = str2.split("").sort();
    var i = 0;
    for(var x = 0; i<str2.length && x<=str1.length; x++) {
        if(str2[i] === str1[x]) {
            i++;
        }
    }
    return (x <= str1.length);
}