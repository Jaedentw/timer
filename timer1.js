const args = process.argv.slice(2);
const time = args.sort();

for(let times of time) {
  if (times > 0 && isNaN(times) === false) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (times * 1000))
  }
};