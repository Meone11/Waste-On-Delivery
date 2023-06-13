# WOD (Waste On Delivery)

---

## Intoduction

Ini adalah Projek untuk menyelesaikan Mata Kuliah RPL (Rekayasa Perangkat Lunak). WOD adalah projek untuk menyelesaikan beberapa masalah terhadap sampah.

1. Penjemputan Sampah yang masih Bersifat Konvensional
2. Penumpukan Sampah yang terjadi didepan rumah apabila sampah tidak dijemput

Kami berpikir bagaimana jika penjemputan sampah ini di lakukan proses digitalisasi seperti teknologi yang sudah ada pada zaman sekarang, contohnya Pesan makan secara online, penjemputan paket secara online, dan lain lain yang berkaitan dengan ONLINE. Oleh karena itu kami membuat Sistem ini yaitu Sistem Penjemputan Sampah Secara Online yang kami beri nama WOD (Waste On Delivery) Untuk sekarang masih berbasis WEB dan bersifat open source. WOD ini juga sudah dapat diakses di mobile app karena sudah kami kembangkan dengan responsive.

## Contibutor

1. Rama Dhaniansyah
2. Ichwanul Fata
3. Dzulkiram Hilmi
4. Raihan Shabirah
5. Riyaddushadiqin

## Get Started

---

First of all, You can initial the packeage.json with the command line `npm init -y`, and then you can install the package or dependencies. After you install typescript you can initialisation the typescript with the command line `npx tsc --init`.

### Back-End

| Depedencies             | Description                                             | Installation                          |
| ----------------------- | ------------------------------------------------------- | ------------------------------------- |
| `typescript`            | For the language use the Ts                             | `npm install --save-dev typescript`   |
| `express`               | node framework                                          | `npm i express`                       |
| `ts/express`            | For initial Express to Ts                               | `npm i --save-dev @types/xpress`      |
| `mongodb`               | Database to store document-based data                   | Kamu dapat Regis dan Login ke mongoDB |
| `mongoose`              | MongoDB object modeling untuk Node.js                   | `npm install mongoose`                |
| `dotnet`                | Untuk memuat file .env                                  | `npm install dotnet`                  |
| `nodemon`               | Untuk melihat perubahan yang tejadi tanpa harus refresh | `npm i --save-dev nodemon`            |
| `ts-node`               | For ts execution and REPL Node.js                       | `npm install -D ts-node`              |
| `eslint`                | For tidy up writing javascript or syntax of rule        | `npm install -D eslint`               |
| `eslint Initialisation` | For Initialisation eslint                               | `npx eslint --init`                   |
| `envalid`               | For Validatin environment variabel                      | `npm i envalid`                       |

---

### Front-End

| Depedencies   | Description                                       | Installation                                           |
| ------------- | ------------------------------------------------- | ------------------------------------------------------ |
| `node-module` | Untuk mengakses Node module                       | `npm install`                                          |
| `react-icons` | Untuk Mengakses Icon dari React                   | `npm install react-icon --save`                        |
| `tailwindcss` | Framework Css Tailwind                            | `npm install -D tailwindcss` && `npx tailwindcss init` |
| `daisyui`     | Untuk Mengakses Component yang telah dibuat daisy | `npm i daisyui`                                        |

Untuk Tailwind, Kamu perlu melakukan configuration lagi di file tailwind.config.js.

## Usage

---

### Back-End

- `npm run dev`
  - Runs the app in the development mode. Pastikan sudah terhubung dengan MongoDB

### Front-End

- `npm  start`
  - Runs the app in the development mode.
- `npm run build`
  - Builds the app for production to the build folder.
