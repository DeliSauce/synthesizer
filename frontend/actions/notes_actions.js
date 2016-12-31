export const KEY_PRESSED = "KEY_PRESSED";
export const KEY_RELEASED = "KEY_RELEASED";

export const keyPressed = (key) => ({
  action: KEY_PRESSED,
  key: key
});

export const keyReleased = (key) => ({
  action: KEY_RELEASED,
  key: key
});
