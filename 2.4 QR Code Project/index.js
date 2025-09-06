import {input} from '@inquirer/prompts';
import qr from 'qr-image';
import * as fs from 'node:fs';

const siteNameFromUser = await input({
    message: "Enter yout site URL:"
});

var qrSvg = qr.image(siteNameFromUser, {
    type: 'svg'
});

qrSvg.pipe(fs.createWriteStream('qr-generated.svg'));

