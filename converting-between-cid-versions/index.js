import { CID } from "multiformats";
import { base256emoji } from "multiformats/bases/base256emoji";
import { base16 } from "multiformats/bases/base16";
import { base32 } from "multiformats/bases/base32";

const cidv0String = process.argv[2];

const cidv0 = CID.parse(cidv0String);
const cidV1 = cidv0.toV1();

// By default, toString() will return the base32 string representation
const cidV1StringBase32 = cidV1.toString();

// You can pass a different base representation
const cidV1StringBase256 = cidV1.toString(base256emoji);
const cidV1StringHex = cidV1.toString(base16);

console.log("Converting CID versions in JS/TS");
console.log("");
console.log("CID (v0): " + cidv0String);
console.log("CID (v0 byte length): " + cidv0.byteLength);
console.log("CID (v1): " + cidV1StringBase32);
console.log("CID (v1 base256) : " + cidV1StringBase256);
console.log("CID (v1 base16 hex) : " + cidV1StringHex);
console.log("CID (v1) byte length: " + cidV1.byteLength);
console.log("CID (v1) bytes: " + cidV1.bytes);
console.log("");
console.log("View CID in Inspector: https://cid.ipfs.tech/#" + cidv0String);
