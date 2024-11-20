import "./styles.css";
import { CID } from "multiformats";
import { base256emoji } from "multiformats/bases/base256emoji";
import { base16 } from "multiformats/bases/base16";
import { base32 } from "multiformats/bases/base32";

const cidv0String = `QmRKs2ZfuwvmZA3QAWmCqrGUjV9pxtBUDP3wuc6iVGnjA2`;

const cidv0 = CID.parse(cidv0String);
const cidV1 = cidv0.toV1();

// By default, toString() will return the base32 string representation
const cidV1StringBase32 = cidV1.toString();

// You can pass a different base representation
const cidV1StringBase256 = cidV1.toString(base256emoji);
const cidV1StringHex = cidV1.toString(base16);

const app = document.getElementById("app");
if (app) {
  app.innerHTML = `
  <h1>Converting CID versions in JS/TS</h1>
  <pre>
CID (v0): ${cidv0String}
CID (v0 byte length): ${cidv0.byteLength}
CID (v1): ${cidV1StringBase32}
CID (v1 base256) : ${cidV1StringBase256}
CID (v1 base16 hex) : ${cidV1StringHex}
CID (v1) byte length: ${cidV1.byteLength}
CID (v1) bytes: ${cidV1.bytes}
  </pre>
  <a href="https://cid.ipfs.tech/#QmRKs2ZfuwvmZA3QAWmCqrGUjV9pxtBUDP3wuc6iVGnjA2">View CID in Inspector</a>
  `;
}
