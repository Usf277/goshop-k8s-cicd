# 🚀 GoShop: Dockerized & Deployable E-commerce Platform

> 🛒 Forked and customized from [ke444a/ecommerce-goshop](https://github.com/ke444a/ecommerce-goshop) — full credit to the original author. This project is licensed under the MIT license.

GoShop is a full-stack e-commerce web application originally built with:

- **Frontend**: React + TypeScript (Vite), Redux Toolkit, TailwindCSS, Firebase Auth, React Router, React Query  
- **Backend**: Node.js, Express, Prisma ORM, Stripe, MySQL, Cloudinary

The application supports:

- Full product browsing, cart, and checkout  
- Admin management of products and orders  
- Firebase authentication with Google login  
- Stripe payments  
- PWA support and Cypress testing

---

## 🛠️ What I’ve Done in This Fork

This fork transforms GoShop into a **DevOps-ready, containerized application** suitable for local development, testing, and automated deployment via Kubernetes and GitHub Actions.

### ✅ Modifications & Additions

- **Dockerization:**
  - Created a production-ready Dockerfile for the frontend (React + Vite + Nginx)
  - Used the original backend’s multistage Dockerfile for Node.js/Prisma

- **Docker Compose Setup:**
  - Added `docker-compose.yml` to spin up frontend, backend, and MySQL in a local test network
  - Configured environment variables for service communication

- **Firebase Refactor:**
  - Replaced Firebase Admin SDK integration with a mock/stub to allow builds without secret keys
  - Adjusted `firebase.ts` and `authMiddleware.ts` to work without crashing

- **Successful Local Deployment:**
  - Verified local build using `docker-compose up --build`
  - App is accessible via:
    - Frontend: [http://localhost:5173](http://localhost:5173)
    - Backend API: [http://localhost:3000/products](http://localhost:3000/products)

---

## 🚀 Deployment Completed with CI/CD Pipeline

- ✅ **Kubernetes manifests** created for deploying backend, frontend, and MySQL to a local `k3d` cluster  
- ✅ **CI/CD Pipeline** implemented using GitHub Actions:
  - Split jobs for test, build, push, and deploy per service (frontend/backend)
  - Each push triggers automatic Docker image build, push to DockerHub, and `kubectl apply` to deploy
- ✅ **Test Phases:** Included placeholders for backend and frontend tests ("No tests implemented yet")
- ✅ **Secrets Management:** DockerHub credentials and kubeconfig securely stored in GitHub Actions Secrets
- ✅ **Result:** Fully automated end-to-end deployment workflow from GitHub to Kubernetes

---

## 📦 Tech Stack

### Frontend
- React + TypeScript + Vite  
- Redux Toolkit  
- TailwindCSS  
- Firebase (Auth - disabled in this version)  
- React Router, React Hook Form, React Query  

### Backend
- Node.js  
- Express.js  
- Prisma ORM  
- Stripe for payments  
- Cloudinary for media storage  
- MySQL  

### DevOps
- Docker & Docker Compose  
- Kubernetes with k3d (local cluster)  
- GitHub Actions (CI/CD)

---

## ⚠️ Disclaimer

Firebase authentication has been disabled in this deployment version for testing and CI/CD demonstration purposes.

All core functionalities like product browsing, orders, and Stripe payments are fully working and testable.

---

## 📄 License & Credit

This project is originally authored by [Danyl Kecha](https://github.com/ke444a) and used here under the MIT License.

All modifications in this version are made by [@Usf277](https://github.com/Usf277) for educational, DevOps practice, and deployment purposes.

---

✅ **Setup is fully CI/CD automated and deployed via Kubernetes. Ready for production-like demonstrations.**
