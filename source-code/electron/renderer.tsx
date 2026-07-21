import React from "react";
import { createRoot } from "react-dom/client";
import "../src/styles.css";
import { VaultApp } from "../src/vault-app";

const el = document.getElementById("root")!;
createRoot(el).render(<VaultApp />);
