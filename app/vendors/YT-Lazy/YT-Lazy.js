import {isMobile} from './../../scripts/utils/isMobile';
import {youtubes} from '../../scripts/primitives';

const imageSize = ytImageSize();

Array
  .from(youtubes)
  .forEach(currentYT => {
    const image = new Image();
    const iframe = document.createElement('iframe');
    const playButton = currentYT.querySelector('.play-button');

    image.src = `//img.youtube.com/vi/${ currentYT.dataset.embed }/${ imageSize }.jpg`;
    image.addEventListener('load', () => currentYT.appendChild(image));
    image.addEventListener('error', () => {

      if (currentYT.parentElement) {
        currentYT.parentElement.remove();
      }

    });

    playButton.addEventListener('click', () => {

      if (!playButton.hidden) {
        iframe.src = `//www.youtube.com/embed/${ currentYT.dataset.embed }?rel=0&showinfo=0&autoplay=1&frameborder=0&color=white&controls=0&disablekb=0&fs=0&modestbranding=1&html5=1`;
        currentYT.insertBefore(iframe, image);
        playButton.hidden = true;
      }

    });

    iframe.addEventListener('load', () => {

      if (isMobile()) {
        image.hidden = true;
      } else {
        image.style.opacity = 0;
      }

    });
  });
/**
 * mqdefault (320×180 pixels)
 * hqdefault (480×360 pixels)
 * sddefault (640×480 pixels)
 * maxresdefault (1920×1080 pixels)
 * @return {String}
 */
function ytImageSize() {
  let minSide = 0;

  if (window.innerWidth <= window.innerHeight) {
    minSide = window.innerWidth;
  } else {
    minSide = window.innerHeight;
  }

  if (minSide <= 180 * 2) {
    return 'mqdefault';
  } else if (minSide <= 360 * 2) {
    return 'hqdefault';
  } else if (minSide <= 480 * 2) {
    return 'sddefault';
  } else {
    return 'maxresdefault';
  }

}
