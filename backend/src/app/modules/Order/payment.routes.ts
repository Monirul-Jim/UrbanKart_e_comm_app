import { Router } from "express";
import {
  initPayment,
  paymentSuccess,
  paymentFail,
  paymentCancel,
  paymentIpn,
} from "./payment.controller";

const router = Router();

router.post("/init", initPayment);
router.post("/success", paymentSuccess);
router.post("/fail", paymentFail);
router.post("/cancel", paymentCancel);
router.post("/ipn", paymentIpn);

export const PaymentRoutes = router;
