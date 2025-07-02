# Smart Dash – Db + SVG + SMTP + Django 

Smart Dash is a Django-based web application that includes a real-time dashboard, an email contact form, and a personal portfolio page with a downloadable CV option. Built using HTML, CSS, JavaScript (Chart.js), and Django, this project demonstrates both backend logic and frontend interactivity in one integrated web app.

---

## 🔧 Features

### 📊 Dashboard (`/`)
- Displays real-time data: **Temperature**, **Humidity**, **Voltage**, and **Current**
- Interactive **line charts** and **pie charts** using Chart.js
- SVG logo used in the navbar for design consistency

### 📩 Contact Us (`/sendmail/`)
- Email form with:
  - Recipient email input
  - Message field
  - Image file upload (JPG, PNG, JPEG) with preview
- Emails sent through **Gmail SMTP**

### 👤 About Me (`/aboutme/`)
- This is **your personal portfolio page**
- Showcases your projects (e.g., Mental Health Platform, Shopify Clone)
- Includes a **"Download Resume/CV"** button at the bottom of the page

---

## 🗂️ Project Structure

```
Smart-dash-html-SVG-Django/
├── dashboard/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   ├── views.py
│   └── wsgi.py
├── myapp/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations/
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── sendmail/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations/
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── static/
│   ├── images/
│   ├── aboutme.css
│   ├── chart1.js
│   ├── chart2.js
│   ├── contact.css
│   ├── contact.js
│   ├── edit.css
│   ├── edit.js
│   ├── piechart.js
│   └── style.css
├── templates/
│   ├── aboutme.html
│   ├── contact.html
│   ├── edit.html
│   ├── index.html
│   └── svg.html
├── db.sqlite3
├── manage.py
└── README.md
```

---

## ⚙️ Installation

### ✅ Prerequisites
- Python 3.8+
- Django 4.2+
- Git
- Gmail account with **App Password** enabled

### 🚀 Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/Shreshtha03/Smart-dash-html-SVG-Django.git
cd Smart-dash-html-SVG-Django
```

2. **Create a Virtual Environment**
```bash
python -m venv venv
# Activate:
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install Dependencies**
```bash
pip install django
```

4. **Configure Email Settings**
Edit `dashboard/settings.py`:
```python
EMAIL_HOST_USER = 'your_email@gmail.com'
EMAIL_HOST_PASSWORD = 'your_app_password'
```

5. **Run Migrations**
```bash
python manage.py makemigrations
python manage.py migrate
```

6. **Start the Server**
```bash
python manage.py runserver
```

Then open:  
📍 `http://localhost:8000/`

---

## 🌐 Usage Guide

| Page         | URL             | Description                                       |
|--------------|------------------|---------------------------------------------------|
| Home         | `/`              | Dashboard with charts and real-time data         |
| Contact Us   | `/sendmail/`     | Email form with message + image upload           |
| Portfolio    | `/aboutme/`      | Your portfolio with **Resume Download** button   |

---

## 🧰 Tech Stack

| Layer     | Tools / Libraries                    |
|-----------|--------------------------------------|
| Backend   | Django 4.2, Python 3.x               |
| Frontend  | HTML, CSS, JavaScript, Chart.js      |
| Charts    | Chart.js                             |
| Email     | Gmail SMTP with App Password         |
| Static    | Django static files                  |
| Version Control | Git + GitHub                   |

---

## 🙋 Contact

- Use the **Contact Us** form at `/sendmail/`
- Or open an issue on this GitHub repository
