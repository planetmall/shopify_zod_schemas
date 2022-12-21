"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAnOrderSchema = void 0;
const zod_1 = require("zod");
exports.cancelAnOrderSchema = zod_1.z.object({
    api_version: zod_1.z.string().optional(),
    order_id: zod_1.z.string(),
    amount: zod_1.z.string().optional(),
    currency: zod_1.z.string().optional(),
    email: zod_1.z.boolean().optional(),
    reason: zod_1.z.enum(['customer', 'inventory', 'fraud', 'declined', 'other']).optional(),
});
//# sourceMappingURL=cancelOrderSchema.js.map