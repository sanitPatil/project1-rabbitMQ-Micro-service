# 🚀 Microservice-Based Project — User, Task & Notification Services #project~1

This project demonstrates a scalable **Microservice Architecture** using:

- **Node.js + TypeScript** → Backend services
- **RabbitMQ** → Event-driven communication between services
- **MongoDB** → Persistent storage for services
- **Docker Compose** → Deploy and manage services easily

Each service is independently deployable and communicates asynchronously through RabbitMQ.

---

## 🧩 Microservices Overview

| Service                  | Port | Responsibility                          |
| ------------------------ | ---- | --------------------------------------- |
| **User Service**         | 3001 | Handles user registration & login       |
| **Task Service**         | 3002 | Creates tasks & publishes events        |
| **Notification Service** | 3003 | Listens for events & logs notifications |

RabbitMQ sits in the center to ensure reliable event delivery.

---

## 📊 Architecture Flow

```mermaid
flowchart
A[User Request] --> B(User Service)

B --> C(Task Service)

C -- Task Created Event --> D>RabbitMQ Exchange

D --> E(Notification Service)

E -->|Send Notification|
```

# folder-structure

```
📦 root-folder/
┣ 📁 user-service/
┃ ┣ 📁 src/
┃ ┣ 📄 Dockerfile
┃ ┗ 📄 package.json
┣ 📁 task-service/
┃ ┣ 📁 src/
┃ ┣ 📄 Dockerfile
┃ ┗ 📄 package.json
┣ 📁 notification-service/
┃ ┣ 📁 src/
┃ ┣ 📄 Dockerfile
┃ ┗ 📄 package.json
┣ 📄 docker-compose.yml
┗ 📄 README.md
```

## 📦 Docker Compose

This project uses **Docker Compose** to run all services (User, Task, Notification, MongoDB, RabbitMQ) together.

### Start All Services

```bash
docker compose up
```

## 👨‍💻 Author

**Sanit Patil** — Software Developer
