# Vismay Devjee — AI Engineer Portfolio

> **Architecting Intelligence**
> Production‑grade AI systems, evaluated, validated, and built to scale.

This repository contains the source code for my personal portfolio website. The site is designed to demonstrate **how I think about building AI systems**, not just what tools I know - with a strong emphasis on **RAG architectures, evaluation frameworks, and production reliability**.

The portfolio is intentionally opinionated: it prioritizes clarity, system design, and engineering trade‑offs over flashy demos.

---

## 🌐 Live Site

🔗 **[https://vismaydevjee.github.io/](https://vismaydevjee.github.io/)**

---

## 🧠 What This Portfolio Showcases

### 1. Production‑Grade RAG Thinking

* Hierarchical retrieval (category → document → chunk)
* Structure‑aware parsing and chunking
* Hybrid retrieval (semantic + keyword)
* Reranking for accuracy over raw speed
* Explicit grounding and citation validation

This is **not** a toy RAG demo - it reflects how retrieval systems are actually designed for regulated or high‑stakes environments.

---

### 2. Evaluation‑First AI Engineering

* Recall@k, Precision, and ranking metrics
* Manual validation loops
* Explicit trade‑offs (latency vs accuracy)
* Guardrails against hallucination

Evaluation is treated as a **first‑class system**, not an afterthought.

---

### 3. System Narratives Over Buzzwords

Instead of long skill lists, the site emphasizes:

* End‑to‑end query execution pipelines
* Decision boundaries and validation gates
* Architecture‑level thinking
* Why certain trade‑offs were chosen

The goal is to communicate **engineering judgment**, not just technical exposure.

---

## 🧩 Key Sections

* **Hero / Introduction** - High‑level positioning and focus areas
* **Query Execution Pipeline** - Visual walkthrough of a production RAG flow
* **System Metrics** - Defensible, evaluation‑backed performance indicators
* **Projects** - Real systems with clear problem → approach → impact framing
* **Resume & Contact** - Direct access for recruiters and collaborators

---

## 🛠 Tech Stack

### Frontend

* **React** (Vite)
* **TypeScript**
* **Framer Motion** (motion & micro‑interactions)
* **Lucide Icons**
* **Tailwind CSS** (via CDN for rapid iteration)

### Tooling & Deployment

* **Vite** (build system)
* **GitHub Actions** (CI/CD)
* **GitHub Pages** (hosting)

The site is fully static and does **not** expose any API keys or backend services.

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

The site will be available at:

```
http://localhost:5173
```

---

## 📦 Build & Deployment

Build the production bundle:

```bash
npm run build
```

Deployment is handled automatically via **GitHub Actions** on every push to `main`.

---

## 🎯 Design Philosophy

* **Clarity over cleverness**
* **Evaluation over intuition**
* **Architecture over demos**
* **Trust over raw novelty**

This mirrors how real AI systems must operate in production.

---

## 📄 Resume

The latest resume is available directly from the site and included in the repository under:

```
public/Resume.pdf
```

---

## 📬 Contact

If you’re interested in discussing:

* RAG systems
* LLM evaluation
* AI platform engineering
* Production ML in regulated environments

Feel free to reach out via LinkedIn or email (linked on the site).

---

## 📝 License

This project is intended for **personal and professional showcase purposes**.
Please do not reuse the design or content verbatim without permission.

---

*Built with intent, not templates.*
