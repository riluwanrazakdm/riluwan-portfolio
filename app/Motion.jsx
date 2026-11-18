"use client";
import { useEffect } from "react";
import init from "../lib/motion";

export default function Motion() {
  // init() returns its own cleanup, so Strict Mode's double-mount and route changes stay clean.
  useEffect(() => init(), []);
  return null;
}
