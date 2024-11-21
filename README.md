# proximanova.github.io

converting-between-cid-versions-and-encodings:
* https://docs.ipfs.tech/concepts/content-addressing/#cid-conversion
* https://github.com/ipfs/ipfs-docs/edit/main/docs/concepts/content-addressing.md / https://github.com/ipfs/ipfs-docs / https://github.com/ipfs/ipfs-docs/zipball/master
* https://codesandbox.io/embed/converting-between-cid-versions-xrvqop?fontsize=14&hidenavigation=1&theme=dark
* https://xrvqop.csb.app/

How to run this locally: screw around a bunch until folder "junk0/" works locally = bad solution. Better solution in GNU/Linux:
1. `$ sudo apt install node`
2. `$ sudo apt install npm`
3. Optional because "node_modules/multiformats/" is already in this repo: `$ npm install multiformats`
4. `$ node index.js Qm...`
