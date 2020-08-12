class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    let arr = string.split(" ")
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = []
    for (let c = 0; c < arr.length; c++) {
      if (c === 0) {
        result.push(this.capitalize(arr[c]))
      } else {
        if (exceptions.includes(arr[c])) {
          result.push(arr[c])
        } else {
          result.push(this.capitalize(arr[c]))
        }
      }
    }

    return result.join(" ")
  }

}