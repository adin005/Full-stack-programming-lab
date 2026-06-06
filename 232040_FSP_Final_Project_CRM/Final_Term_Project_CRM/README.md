# 🏢 CRM System — MERN + Next.js

Full-Stack Customer Relationship Management System

---

## 📁 Full Folder Structure

```
Final_Term_Project_CRM/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Customer.js
│   │   ├── Invoice.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── customers.js
│   │   └── invoices.js
│   ├── .env
│   ├── package.json
│   ├── seed.js
│   └── server.js
│
└── frontend/
    ├── app/
    │   ├── dashboard/
    │   │   ├── customers/
    │   │   │   ├── [id]/
    │   │   │   │   ├── edit/
    │   │   │   │   │   └── page.js
    │   │   │   │   └── page.js
    │   │   │   ├── new/
    │   │   │   │   └── page.js
    │   │   │   └── page.js
    │   │   ├── invoices/
    │   │   │   ├── new/
    │   │   │   │   └── page.js
    │   │   │   └── page.js
    │   │   ├── layout.js
    │   │   └── page.js
    │   ├── login/
    │   │   └── page.js
    │   ├── register/
    │   │   └── page.js
    │   ├── globals.css
    │   ├── layout.js
    │   └── page.js
    ├── components/
    │   ├── Chatbot.js
    │   ├── CustomerForm.js
    │   └── Sidebar.js
    ├── lib/
    │   ├── api.js
    │   ├── AuthContext.js
    │   └── pdfGenerator.js
    ├── .env.local
    ├── next.config.js
    ├── package.json
    ├── postcss.config.js
    └── tailwind.config.js
```

---

## ⚙️ Prerequisites

Install these before starting:

- [Node.js v18+](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) — or use [MongoDB Atlas](https://cloud.mongodb.com) (free cloud DB)
- [Git](https://git-scm.com/)
- VS Code (recommended)

---

## 🚀 Setup & Run Instructions

### Step 1 — Clone / Open the project

If you cloned from GitHub:
```bash
cd Final_Term_Project_CRM
```

---

### Step 2 — Setup Backend

```bash
cd backend
npm install
```

#### Configure MongoDB

**Option A — Local MongoDB:**
Make sure MongoDB is running. The default URI in `.env` is:
```
MONGO_URI=mongodb://localhost:27017/crm_db
```

**Option B — MongoDB Atlas (cloud):**
1. Go to https://cloud.mongodb.com
2. Create free cluster → Get connection string
3. Replace `MONGO_URI` in `backend/.env` with your Atlas URI

#### Seed the database (creates 15 customers + demo login)

```bash
npm run seed
```

Output:
```
✅ Seed complete!
📧 Login: admin@crm.com
🔑 Password: password123
```

#### Start the backend

```bash
npm run dev
```

Backend runs at: `http://localhost:5000`

---

### Step 3 — Setup Frontend

Open a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:3000`

---

## 🌐 Open the App

Go to: **http://localhost:3000**

Login with:
- Email: `admin@crm.com`
- Password: `password123`

---

## ✅ Features Checklist

| Feature | Status |
|---|---|
| JWT Authentication (Register/Login/Logout) | ✅ |
| Protected Routes | ✅ |
| Customer CRUD (Add/View/Edit/Delete) | ✅ |
| 15 Seeded Customer Records | ✅ |
| Search by Name (live, no reload) | ✅ |
| Filter by Status (Lead/Active/Inactive) | ✅ |
| Invoice Generation | ✅ |
| PDF Download of Invoice | ✅ |
| Toast Notifications (success/error) | ✅ |
| Rule-based Chatbot | ✅ |
| Responsive UI (Mobile + Desktop) | ✅ |
| Next.js SSR + CSR | ✅ |
| MongoDB with Mongoose schemas | ✅ |

---

## 🤖 Chatbot Commands

Type these in the chat widget (bottom-right button):

| Command | Action |
|---|---|
| `help` | List all commands |
| `show customers` | Fetch and list customers |
| `add customer` | Navigate to add form |
| `generate invoice` | Open invoice module |
| `dashboard` | Go to dashboard |
| `stats` | Show customer statistics |

---

## 🔗 API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET  /api/auth/me` *(protected)*

### Customers *(all protected)*
- `GET    /api/customers?search=&status=`
- `GET    /api/customers/:id`
- `POST   /api/customers`
- `PUT    /api/customers/:id`
- `DELETE /api/customers/:id`

### Invoices *(all protected)*
- `GET    /api/invoices`
- `GET    /api/invoices/:id`
- `POST   /api/invoices`
- `DELETE /api/invoices/:id`

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14, React 18, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcryptjs |
| PDF | jsPDF, jspdf-autotable |
| Notifications | react-hot-toast |
| HTTP Client | Axios |
