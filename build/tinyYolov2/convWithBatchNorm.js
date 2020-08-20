"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convWithBatchNorm = void 0;
const tf = require("@tensorflow/tfjs-core");
const leaky_1 = require("./leaky");
function convWithBatchNorm(x, params) {
    return tf.tidy(() => {
        let out = tf.pad(x, [[0, 0], [1, 1], [1, 1], [0, 0]]);
        out = tf.conv2d(out, params.conv.filters, [1, 1], 'valid');
        out = tf.sub(out, params.bn.sub);
        out = tf.mul(out, params.bn.truediv);
        out = tf.add(out, params.conv.bias);
        return leaky_1.leaky(out);
    });
}
exports.convWithBatchNorm = convWithBatchNorm;
//# sourceMappingURL=convWithBatchNorm.js.map