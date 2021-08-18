Đồ án cuối kì thực hành môn Cơ sở dữ liệu nâng cao<br>
Giáo viên hướng dẫn : Hồ Thị Hoàng Vy<br>
Nhóm 2: <br>
- Phạm Võ Đức Phong – 18126007
- Nguyễn Sang – 18126029
- Đinh Viết Trung – 18126035
- Nguyễn Anh Khôi – 1752024

Chi tiết: <br>
- Back-end: Node.js
- Front-end: ReactJS
- Database: MSSQL Server 

## Run Locally

### 1. Clone repo

$ git clone https://github.com/mindland/doan_csdlnc.git
	
### 2. Install MongoDB

Download it from here: https://docs.mongodb.com/manual/administration/install-community/

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```
### 5. Create Admin User

- Run this on chrome: http://localhost:5000/api/users/createadmin
- It returns admin email and password

### 6. Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

### 7. Create Products

- Run http://localhost:3000/products
- Click create product and enter product info
