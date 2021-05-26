window.onload = () => {
  let timeline = anime.timeline({});

  timeline.add({
    targets: '#animejs-path',
    strokeDashoffset: [999, 0],
  });

  timeline.add({
    /* move logo up */
  });

  timeline.add({
    /* show separator */
  });

  timeline.add({
    /* reveal subtitle */
  });

  timeline.add({
    /* move subtitle down */
  });
};
