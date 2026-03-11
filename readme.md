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