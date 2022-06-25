export const res = () => {
  try {
    var result = fetch('http://192.168.112.221:3000/test')
      .then(res => res.json())
      .then(result => {
        //   console.log('api res\t', result);
        // ap = result;
        return result;
      });
    // return ap;
    // return 25;
    // result.then()
  } catch (error) {
    console.log('error report');
  }
};
