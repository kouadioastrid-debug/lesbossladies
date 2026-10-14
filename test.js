import getColors from 'get-image-colors';
import path from 'path';

getColors('/workspaces/default/code/src/imports/4EA1D497-5808-41A5-A1A3-2C68853A001C.png').then(colors => {
  colors.forEach(color => console.log(color.hex()))
}).catch(console.error)
