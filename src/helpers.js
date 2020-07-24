export const secondsToMMSS = (seconds) => {
  const sec_num = parseInt(seconds, 10);
  const minutes = Math.floor(sec_num / 60) % 60;
  let sec = sec_num % 60;

  if (sec < 10) {
    sec = "0" + sec;
  }

  return minutes + ":" + sec;
};
