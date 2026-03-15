# Service


## Auth-Users
| Method | Path | Params | Access | Body | Description |
|:- |:- |:- |:- |:- |:-
|POST| /api/auth/register | - |Public | {username, email, password} | สมัครสมาชิก
|POST| /api/auth/login | - |Public | {username, password} | เข้าสู่ระบบ


## Card
| Method | Path | Params | Access | Body | Description |
|:- |:- |:- |:- |:- |:-
|GET| /api/cards | - |Public | -| ดึงรายกชื่อการ์ด
|POST| /api/admin/cards | - |ADMIN | {id, name, rarity, color, image} | ดึงรายชื่อการ์ด
|PUT| /api/admin/cards | :id |ADMIN | {id, name, rarity, color, image} | แก้ไขข้อมูลการ์ด


## Listings
| Method | Path | Params | Access | Body | Description |
|:- |:- |:- |:- |:- |:-
|GET| /api/listings | - |Public | - | ดูรายชื่อการ์ดที่ลงขายทั้งหมด
|POST| /api/listings | - |USER | {price, cardId, sellerId, image} | ลงขายการ์ด
|PATCH| /api/listings/:id | :id |Owner/ADMIN | {price, cardId, sellerId, image} | แก้ไขข้อมูลการ์ด
|DELETE| /api/listings/:id | :id |Owner/ADMIN | - | ลบรายการขาย
|GET| /api/listings/ | - |Public | name= ....  | ค้นหา - กรองข้อมูล



## Orders
| Method | Path | Params | Access | Body | Description |
|:- |:- |:- |:- |:- |:-
|POST| /api/orders | - |USER | ID ที่จะซื้อ | สร้างรายการสินค้าใส่ตะกล้า
|GET| /api/orders | - |USER | - | ดูประวัติการซื้อ
|GET| /api/orders/:id | :id |USER | - | ดูรายละเอียดออเดอร์





<!-- 
## 🔐 Authentication & Users
| Method | Path | Access | Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Public | สมัครสมาชิกใหม่ |
| **POST** | `/api/auth/login` | Public | เข้าสู่ระบบ และรับ JWT Token |

## 🃏 Cards (Catalog & Management)
| Method | Path | Access | Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/cards` | Public | ดึงข้อมูลการ์ดทั้งหมด (รองรับ Search & Multi-Filter) |
| **GET** | `/api/cards/:id` | Public | ดูรายละเอียดการ์ดรายใบ |
| **POST** | `/api/admin/cards` | **Admin** | เพิ่มการ์ดใหม่เข้าสต็อก |
| **PUT** | `/api/admin/cards/:id` | **Admin** | แก้ไขข้อมูลการ์ด/ราคา/สต็อก |
| **DELETE** | `/api/admin/cards/:id` | **Admin** | ลบการ์ดออกจากระบบ |

## 📦 Orders (Shopping & Payment)
| Method | Path | Access | Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/orders` | **User** | สร้างออเดอร์ (Checkout) และตัดสต็อกสินค้า |
| **GET** | `/api/orders` | **User** | ดูประวัติการสั่งซื้อของตัวเอง |
| **GET** | `/api/orders/:id` | **User/Admin** | ดูรายละเอียดออเดอร์ (รวมรายการสินค้าและสถานะ) |
| **PATCH** | `/api/orders/:id/payment` | **User** | แจ้งโอนเงิน (ส่งลิงก์รูปสลิป) และเปลี่ยนสถานะเป็น PAID |
| **GET** | `/api/admin/orders` | **Admin** | ดูรายการออเดอร์ทั้งหมดในระบบ (เพื่อตรวจสลิป) |
| **PATCH** | `/api/admin/orders/:id/status` | **Admin** | ยืนยันการส่งของ และเปลี่ยนสถานะเป็น SHIPPED |

## ❤️ Wishlist (User Favorites)
| Method | Path | Access | Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/wishlist` | **User** | ดึงรายการการ์ดที่ถูกใจทั้งหมดของ User |
| **POST** | `/api/wishlist` | **User** | เพิ่มการ์ดเข้ารายการที่ถูกใจ |
| **DELETE** | `/api/wishlist/:cardId` | **User** | ลบการ์ดออกจากรายการที่ถูกใจ |

---

## 🛠 Search & Multi-Filter Query Params
สามารถใช้ Query String ในการกรองข้อมูลการ์ดได้ที่ `GET /api/cards`:
- `search`: ค้นหาชื่อการ์ด (เช่น `?search=luffy`)
- `color`: กรองตามสี (เช่น `?color=Red`)
- `rarity`: กรองตามระดับความหายาก (เช่น `?rarity=SR`)
- `minPrice` / `maxPrice`: กรองตามช่วงราคา (เช่น `?minPrice=100&maxPrice=500`)


- ถ้าทำทันให้เพิ่มฟีเจอร์ให้ user แก้ไขที่อยู่หรือแก้ไขโปรไฟล์ของตัวเองได้ -->