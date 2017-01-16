  /**
   *
   * @param data
   * @param numberOfProperties
   * @returns {Array}
   */
  static transformFormData (data, numberOfProperties = 3) {
    let result = [], obj = {}, length = data.length;
    for (let i = 0; i < length; i++) {
      if (data[i].name) {
        obj[data[i].name.replace('[]', '')] = data[i].value;
        if (numberOfProperties) {
          if (Object.keys(obj).length === numberOfProperties) {
            result.push(obj);
            obj = {};
          }
        }
      }
    }
    if (!numberOfProperties) {
      result.push(obj);
    }
    return result;
  }
