/* global chrome */
export const VIDEO_EXTNS = ['webm', 'mp4'];
export const IMAGE_EXTNS = ['png', 'gif', 'jpg', 'jpeg', 'webp'];
export function get_extn(path) {
  return path
    .split('.')
    .pop()
    .trim();
}
export function is_video(path) {
  return VIDEO_EXTNS.includes(get_extn(path).toLowerCase());
}
export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
}

export function image_src_exists(image, images) {
  for (let i = 0; i < images.length; i++) {
    if (image.src.trim().toLowerCase() === images[i].src.trim().toLowerCase()) {
      return true;
    }
  }
  return false;
}

export function get_images() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get('images', obj => {
      let { images } = obj;
      if (images) {
        resolve(images);
      } else {
        chrome.storage.local.set({ images: [] }, () => {
          resolve([]);
        });
      }
    });
  });
}

export function remove_image(image) {
  return new Promise((resolve, reject) => {
    get_images()
      .then(images => {
        images = images.filter(img => {
          return image.id !== img.id;
        });
        return set_images(images);
      })
      .then(images => {
        resolve(images);
      });
  });
}

export function set_images(images) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ images }, () => {
      get_images().then(images => resolve(images));
    });
  });
}

export function add_tag(image, tag) {
  return new Promise((resolve, reject) => {
    get_images().then(images => {
      for (let i = 0; i < images.length; i++) {
        if (images[i].id === image.id) {
          if (
            !images[i].tags
              .map(tag => tag.toLowerCase().trim())
              .includes(tag.toLowerCase().trim())
          ) {
            images[i].tags.push(tag);
            images[i].tags.sort();
            let _image = images[i];
            set_images(images).then(images => resolve(_image));
          }
          resolve(images[i]);
          break;
        }
      }
    });
  });
}

export function remove_tag(image, tag) {
  return new Promise((resolve, reject) => {
    get_images().then(images => {
      for (let i = 0; i < images.length; i++) {
        if (images[i].id === image.id) {
          if (images[i].tags.includes(tag)) {
            images[i].tags.splice(images[i].tags.indexOf(tag), 1);
            let _image = images[i];
            set_images(images).then(images => resolve(_image));
          }
          resolve(images[i]);
          break;
        }
      }
    });
  });
}
